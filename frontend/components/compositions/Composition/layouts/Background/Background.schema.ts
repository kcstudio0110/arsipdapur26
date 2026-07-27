import type { CompositionSchema } from "../../Composition.schema";

import { BACKGROUND_ALIGNMENT_OPTIONS } from "./Background.constants";

export const BACKGROUND_SCHEMA: CompositionSchema = {
    name: "Background",

    description: "Background image layout with overlay content.",

    fields: [
        {
            key: "background.image.desktop",
            label: "Desktop Background Image",
            type: "image",
            required: true,
        },
        {
            key: "background.image.mobile",
            label: "Mobile Background Image",
            type: "image",
        },
        {
            key: "background.image.alt",
            label: "Alternative Text",
            type: "text",
            required: true,
        },
        {
            key: "content.eyebrow",
            label: "Eyebrow",
            type: "text",
        },
        {
            key: "content.title",
            label: "Title",
            type: "text",
            required: true,
        },
        {
            key: "content.description",
            label: "Description",
            type: "textarea",
        },
        {
            key: "layout.alignment",
            label: "Alignment",
            type: "select",
            options: BACKGROUND_ALIGNMENT_OPTIONS,
        },
    ],
};
