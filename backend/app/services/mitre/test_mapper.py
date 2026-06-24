from app.services.mitre.mapper import MitreMapper


mapper = MitreMapper()

result = mapper.map_text(
    "Remote code execution vulnerability allows attackers to exploit the application."
)

print(result)