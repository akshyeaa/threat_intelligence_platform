import ipaddress

from app.constants.ioc_types import IPV4


class IOCValidator:
    """
    Validates extracted IOC values.
    """

    @staticmethod
    def validate(ioc_type: str, value: str) -> bool:
        """
        Validate an IOC based on its type.
        """

        if ioc_type == IPV4:
            return IOCValidator._validate_ipv4(value)

        return IOCValidator._validate_generic(value)

    @staticmethod
    def _validate_ipv4(ip: str) -> bool:
        try:
            ipaddress.IPv4Address(ip)
            return True
        except ValueError:
            return False

    @staticmethod
    def _validate_generic(value: str) -> bool:
        return bool(value.strip())