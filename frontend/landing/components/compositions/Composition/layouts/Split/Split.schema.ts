import type { CompositionSchema } from "../../Composition.schema";

import { SPLIT_MEDIA_POSITION_OPTIONS } from "./Split.constants";

export const SPLIT_SCHEMA: CompositionSchema = {
    name: "Split",

    description: "Split layout with media and content.",

    fields: [
        {
            key: "media.image.desktop",
            label: "Desktop Image",
            type: "image",
            required: true,
        },
        {
            key: "media.image.mobile",
            label: "Mobile Image",
            type: "image",
        },
        {
            key: "media.image.alt",
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
            key: "layout.position",
            label: "Media Position",
            type: "select",
            options: SPLIT_MEDIA_POSITION_OPTIONS,
        },
    ],
};
