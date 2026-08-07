from __future__ import annotations

from dataclasses import dataclass
from enum import StrEnum


class LogLevel(StrEnum):
    """
    Application log levels.
    """

    DEBUG = "debug"
    INFO = "info"
    WARNING = "warning"
    ERROR = "error"
    CRITICAL = "critical"


class ErrorType(StrEnum):
    """
    Error categories.
    """

    SYSTEM = "system"
    VALIDATION = "validation"
    BUSINESS = "business"
    AUTHENTICATION = "authentication"
    AUTHORIZATION = "authorization"


class ErrorCode(StrEnum):
    """
    Stable application error codes.

    Never rename or remove an existing code after it is
    consumed by frontend or external integrations.
    """

    # ==========================================================
    # 1000 - Common
    # ==========================================================

    COMMON_INTERNAL_SERVER_ERROR = "COMMON_INTERNAL_SERVER_ERROR"
    COMMON_VALIDATION_ERROR = "COMMON_VALIDATION_ERROR"
    COMMON_BAD_REQUEST = "COMMON_BAD_REQUEST"
    COMMON_NOT_FOUND = "COMMON_NOT_FOUND"
    COMMON_CONFLICT = "COMMON_CONFLICT"

    # ==========================================================
    # 2000 - Identity
    # ==========================================================

    IDENTITY_USER_NOT_FOUND = "IDENTITY_USER_NOT_FOUND"
    IDENTITY_ROLE_NOT_FOUND = "IDENTITY_ROLE_NOT_FOUND"

    IDENTITY_EMAIL_ALREADY_EXISTS = "IDENTITY_EMAIL_ALREADY_EXISTS"

    IDENTITY_INVALID_CREDENTIALS = "IDENTITY_INVALID_CREDENTIALS"
    IDENTITY_USER_INACTIVE = "IDENTITY_USER_INACTIVE"

    IDENTITY_UNAUTHORIZED = "IDENTITY_UNAUTHORIZED"
    IDENTITY_FORBIDDEN = "IDENTITY_FORBIDDEN"

    # ==========================================================
    # 3000 - Product
    # ==========================================================

    PRODUCT_NOT_FOUND = "PRODUCT_NOT_FOUND"
    PRODUCT_ALREADY_EXISTS = "PRODUCT_ALREADY_EXISTS"
    PRODUCT_SKU_ALREADY_EXISTS = "PRODUCT_SKU_ALREADY_EXISTS"

    # ==========================================================
    # 4000 - Warehouse
    # ==========================================================

    WAREHOUSE_NOT_FOUND = "WAREHOUSE_NOT_FOUND"

    # ==========================================================
    # 5000 - Inventory
    # ==========================================================

    INVENTORY_NOT_FOUND = "INVENTORY_NOT_FOUND"
    INVENTORY_STOCK_NOT_ENOUGH = "INVENTORY_STOCK_NOT_ENOUGH"


@dataclass(frozen=True, slots=True)
class ErrorDetail:
    """
    Metadata for an application error.
    """

    status_code: int
    message: str
    log_level: LogLevel
    error_type: ErrorType
    expose: bool = True


ERRORS: dict[ErrorCode, ErrorDetail] = {
    # ==========================================================
    # 1000 - Common
    # ==========================================================
    ErrorCode.COMMON_INTERNAL_SERVER_ERROR: ErrorDetail(
        status_code=500,
        message="Internal server error.",
        log_level=LogLevel.ERROR,
        error_type=ErrorType.SYSTEM,
        expose=False,
    ),
    ErrorCode.COMMON_VALIDATION_ERROR: ErrorDetail(
        status_code=422,
        message="Validation error.",
        log_level=LogLevel.INFO,
        error_type=ErrorType.VALIDATION,
    ),
    ErrorCode.COMMON_BAD_REQUEST: ErrorDetail(
        status_code=400,
        message="Bad request.",
        log_level=LogLevel.INFO,
        error_type=ErrorType.VALIDATION,
    ),
    ErrorCode.COMMON_NOT_FOUND: ErrorDetail(
        status_code=404,
        message="Resource not found.",
        log_level=LogLevel.WARNING,
        error_type=ErrorType.BUSINESS,
    ),
    ErrorCode.COMMON_CONFLICT: ErrorDetail(
        status_code=409,
        message="Conflict.",
        log_level=LogLevel.WARNING,
        error_type=ErrorType.BUSINESS,
    ),
    # ==========================================================
    # 2000 - Identity
    # ==========================================================
    ErrorCode.IDENTITY_USER_NOT_FOUND: ErrorDetail(
        status_code=404,
        message="User not found.",
        log_level=LogLevel.WARNING,
        error_type=ErrorType.BUSINESS,
    ),
    ErrorCode.IDENTITY_ROLE_NOT_FOUND: ErrorDetail(
        status_code=404,
        message="Role not found.",
        log_level=LogLevel.WARNING,
        error_type=ErrorType.BUSINESS,
    ),
    ErrorCode.IDENTITY_EMAIL_ALREADY_EXISTS: ErrorDetail(
        status_code=409,
        message="Email already exists.",
        log_level=LogLevel.WARNING,
        error_type=ErrorType.BUSINESS,
    ),
    ErrorCode.IDENTITY_INVALID_CREDENTIALS: ErrorDetail(
        status_code=401,
        message="Invalid email or password.",
        log_level=LogLevel.INFO,
        error_type=ErrorType.AUTHENTICATION,
    ),
    ErrorCode.IDENTITY_USER_INACTIVE: ErrorDetail(
        status_code=403,
        message="User account is inactive.",
        log_level=LogLevel.WARNING,
        error_type=ErrorType.AUTHORIZATION,
    ),
    ErrorCode.IDENTITY_UNAUTHORIZED: ErrorDetail(
        status_code=401,
        message="Unauthorized.",
        log_level=LogLevel.INFO,
        error_type=ErrorType.AUTHENTICATION,
    ),
    ErrorCode.IDENTITY_FORBIDDEN: ErrorDetail(
        status_code=403,
        message="Forbidden.",
        log_level=LogLevel.WARNING,
        error_type=ErrorType.AUTHORIZATION,
    ),
    # ==========================================================
    # 3000 - Product
    # ==========================================================
    ErrorCode.PRODUCT_NOT_FOUND: ErrorDetail(
        status_code=404,
        message="Product not found.",
        log_level=LogLevel.WARNING,
        error_type=ErrorType.BUSINESS,
    ),
    ErrorCode.PRODUCT_ALREADY_EXISTS: ErrorDetail(
        status_code=409,
        message="Product already exists.",
        log_level=LogLevel.WARNING,
        error_type=ErrorType.BUSINESS,
    ),
    ErrorCode.PRODUCT_SKU_ALREADY_EXISTS: ErrorDetail(
        status_code=409,
        message="SKU already exists.",
        log_level=LogLevel.WARNING,
        error_type=ErrorType.BUSINESS,
    ),
    # ==========================================================
    # 4000 - Warehouse
    # ==========================================================
    ErrorCode.WAREHOUSE_NOT_FOUND: ErrorDetail(
        status_code=404,
        message="Warehouse not found.",
        log_level=LogLevel.WARNING,
        error_type=ErrorType.BUSINESS,
    ),
    # ==========================================================
    # 5000 - Inventory
    # ==========================================================
    ErrorCode.INVENTORY_NOT_FOUND: ErrorDetail(
        status_code=404,
        message="Inventory not found.",
        log_level=LogLevel.WARNING,
        error_type=ErrorType.BUSINESS,
    ),
    ErrorCode.INVENTORY_STOCK_NOT_ENOUGH: ErrorDetail(
        status_code=409,
        message="Insufficient stock.",
        log_level=LogLevel.WARNING,
        error_type=ErrorType.BUSINESS,
    ),
}


def has_error(code: ErrorCode) -> bool:
    return code in ERRORS


def get_error(code: ErrorCode) -> ErrorDetail:
    return ERRORS[code]


def get_status_code(code: ErrorCode) -> int:
    return get_error(code).status_code


def get_error_message(code: ErrorCode) -> str:
    return get_error(code).message


def get_log_level(code: ErrorCode) -> LogLevel:
    return get_error(code).log_level


def get_error_type(code: ErrorCode) -> ErrorType:
    return get_error(code).error_type


def should_expose(code: ErrorCode) -> bool:
    return get_error(code).expose
