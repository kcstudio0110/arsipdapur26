from app.exceptions.base import AppException


class BadRequestException(AppException):
    """400"""


class UnauthorizedException(AppException):
    """401"""


class ForbiddenException(AppException):
    """403"""


class NotFoundException(AppException):
    """404"""


class ConflictException(AppException):
    """409"""


class ValidationException(AppException):
    """422"""
