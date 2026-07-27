import { TYPOGRAPHY_VARIANTS } from "./Typography.constants";
import { TYPOGRAPHY_STYLES } from "./Typography.styles";
import type { TypographyProps } from "./Typography.types";

export function Typography({
    as: Component = "p",
    variant = TYPOGRAPHY_VARIANTS.BODY,
    className = "",
    children,
}: TypographyProps) {
    return (
        <Component className={`${TYPOGRAPHY_STYLES[variant]} ${className}`}>{children}</Component>
    );
}
