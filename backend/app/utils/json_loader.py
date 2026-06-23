import json
from pathlib import Path
from typing import Any


class JSONLoader:
    """
    Utility class for loading JSON datasets.
    """

    _cache: dict[Path, Any] = {}

    @classmethod
    def load(cls, file_path: Path) -> Any:

        if file_path in cls._cache:
            return cls._cache[file_path]

        if not file_path.exists():
            raise FileNotFoundError(
                f"Dataset not found: {file_path}"
            )

        with file_path.open(
            "r",
            encoding="utf-8"
        ) as file:

            data = json.load(file)

        cls._cache[file_path] = data

        return data
    
    @classmethod
    def clear_cache(cls):
        """
        Clear all cached datasets.
        """
        cls._cache.clear()