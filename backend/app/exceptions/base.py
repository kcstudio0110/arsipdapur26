from app.core.errors import ErrorCode


class AppException(Exception):
    """
    Base application exception.

    Every application exception carries an ErrorCode.
    """

    def __init__(self, code: ErrorCode):
        self.code = code
        super().__init__(code.value)
