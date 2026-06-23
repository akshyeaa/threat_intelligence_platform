from app.services.ioc.service import IOCService


sample_text = """
Finance users received phishing emails.

Visit https://secure-login-update.com

IP: 185.199.108.153

Email:
attacker@evil.com

CVE-2023-3519

Hash:
5d41402abc4b2a76b9719d911017c592

Again:

CVE-2023-3519
"""

service = IOCService()

result = service.extract_iocs(sample_text)

print(result.model_dump_json(indent=4))