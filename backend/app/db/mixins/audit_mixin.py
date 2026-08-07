from __future__ import annotations

import uuid

from app.db.mixins.soft_delete_mixin import SoftDeleteMixin
from app.db.mixins.timestamp_mixin import TimestampMixin
from app.db.mixins.uuid_mixin import UUIDMixin
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column


class AuditMixin(
    UUIDMixin,
    TimestampMixin,
    SoftDeleteMixin,
):
    """
    Complete audit mixin used by business entities.
    """

    created_by: Mapped[uuid.UUID | None] = mapped_column(
        UUID(as_uuid=True),
        nullable=True,
        default=None,
    )

    updated_by: Mapped[uuid.UUID | None] = mapped_column(
        UUID(as_uuid=True),
        nullable=True,
        default=None,
    )
