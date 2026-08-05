/**
 * Tipe field yang didukung oleh Composition Schema.
 */
export type CompositionFieldType =
    "text" | "textarea" | "image" | "select" | "number" | "boolean" | "url";

/**
 * Opsi untuk field bertipe select.
 */
export interface CompositionFieldOption {
    label: string;
    value: string;
}

/**
 * Definisi satu field pada schema.
 */
export interface CompositionField {
    key: string;
    label: string;
    type: CompositionFieldType;

    required?: boolean;
    placeholder?: string;
    helperText?: string;

    options?: ReadonlyArray<CompositionFieldOption>;
}

/**
 * Schema sebuah Composition.
 */
export interface CompositionSchema {
    name: string;
    description?: string;

    fields: CompositionField[];
}
