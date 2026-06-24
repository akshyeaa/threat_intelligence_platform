from pathlib import Path


BASE_DIR = Path(__file__).resolve().parents[2]

STATIC_DIR = BASE_DIR / "app" / "static"

CVE_DATASET = STATIC_DIR / "cves" / "cves.json"

MITRE_DATASET = STATIC_DIR / "mitre" / "mitre.json"

MALWARE_DATASET = STATIC_DIR / "malware" / "malware.json"

ACTOR_DATASET = STATIC_DIR / "actors" / "actors.json"

REPUTATION_DATASET = STATIC_DIR / "reputation" / "reputation.json"

UPLOAD_DIR = BASE_DIR / "uploads"

IP_REPUTATION_DATASET = BASE_DIR / "app" / "static" / "reputation" / "ip_reputation.json"