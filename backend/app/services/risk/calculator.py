from app.constants.risk import (
    SEVERITY_SCORES,
    EXPLOIT_SCORE,
    HIGH_CVSS_SCORE,
    MEDIUM_CVSS_SCORE,
    MAX_RISK_SCORE,
)


class RiskCalculator:

    @staticmethod
    def calculate(
        enrichment: dict,
        mitre: dict | None,
    ):

        score = 0

        severity = enrichment.get("severity")

        if severity:
            score += SEVERITY_SCORES.get(
                severity,
                0,
            )

        cvss = enrichment.get("cvss")

        if cvss:

            if cvss >= 9:
                score += HIGH_CVSS_SCORE

            elif cvss >= 7:
                score += MEDIUM_CVSS_SCORE

        if enrichment.get("exploit"):
            score += EXPLOIT_SCORE

        if (
            mitre
            and mitre.get("tactic")
            == "Initial Access"
        ):
            score += 15

        score = min(
            score,
            MAX_RISK_SCORE,
        )

        level = RiskCalculator.get_level(
            score
        )

        return {
            "score": score,
            "level": level,
        }

    @staticmethod
    def get_level(score: int):

        if score >= 80:
            return "Critical"

        if score >= 60:
            return "High"

        if score >= 40:
            return "Medium"

        return "Low"