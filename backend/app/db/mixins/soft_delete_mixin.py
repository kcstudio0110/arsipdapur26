from __future__ import annotations

import uuid
from datetime import UTC, datetime

from sqlalchemy import DateTime
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column


class SoftDeleteMixin:
    """
    Provides soft delete fields.
    """

    deleted_at: Mapped[datetime | None] = mapped_column(
        DateTime(timezone=True),
        nullable=True,
        default=None,
    )

    deleted_by: Mapped[uuid.UUID | None] = mapped_column(
        UUID(as_uuid=True),
        nullable=True,
        default=None,
    )

    @property
    def is_deleted(self) -> bool:
        return self.deleted_at is not None

    def mark_deleted(
        self,
        user_id: uuid.UUID | None = None,
    ) -> None:
        self.deleted_at = datetime.now(UTC)
        self.deleted_by = user_id

    def restore(self) -> None:
        self.deleted_at = None
        self.deleted_by = None
