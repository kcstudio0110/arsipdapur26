from app.core.errors import (
    ErrorCode,
    get_error,
    get_error_message,
    get_error_type,
)
from app.core.logging import logger
from app.exceptions.base import AppException
from fastapi import FastAPI, Request
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse


def register_exception_handlers(app: FastAPI) -> None:
    """
    Register all global exception handlers.
    """

    @app.exception_handler(AppException)
    async def app_exception_handler(
        request: Request,
        exc: AppException,
    ) -> JSONResponse:

        detail = get_error(exc.code)

        getattr(logger, detail.log_level.value)(
            event=exc.code.value,
            message=detail.message,
            path=request.url.path,
        )

        return JSONResponse(
            status_code=detail.status_code,
            content={
                "success": False,
                "code": exc.code.value,
                "type": get_error_type(exc.code).value,
                "message": (
                    detail.message
                    if detail.expose
                    else get_error_message(ErrorCode.COMMON_INTERNAL_SERVER_ERROR)
                ),
                "data": None,
            },
        )

    @app.exception_handler(RequestValidationError)
    async def validation_exception_handler(
        request: Request,
        exc: RequestValidationError,
    ) -> JSONResponse:

        detail = get_error(ErrorCode.COMMON_VALIDATION_ERROR)

        logger.info(
            event=ErrorCode.COMMON_VALIDATION_ERROR.value,
            message=detail.message,
            path=request.url.path,
        )

        return JSONResponse(
            status_code=detail.status_code,
            content={
                "success": False,
                "code": ErrorCode.COMMON_VALIDATION_ERROR.value,
                "type": get_error_type(ErrorCode.COMMON_VALIDATION_ERROR).value,
                "message": detail.message,
                "errors": exc.errors(),
                "data": None,
            },
        )

    @app.exception_handler(Exception)
    async def unhandled_exception_handler(
        request: Request,
        exc: Exception,
    ) -> JSONResponse:

        detail = get_error(ErrorCode.COMMON_INTERNAL_SERVER_ERROR)

        logger.error(
            event=ErrorCode.COMMON_INTERNAL_SERVER_ERROR.value,
            message=str(exc),
            path=request.url.path,
        )

        return JSONResponse(
            status_code=detail.status_code,
            content={
                "success": False,
                "code": ErrorCode.COMMON_INTERNAL_SERVER_ERROR.value,
                "type": get_error_type(ErrorCode.COMMON_INTERNAL_SERVER_ERROR).value,
                "message": detail.message,
                "data": None,
            },
        )
