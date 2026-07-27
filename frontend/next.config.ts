import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactCompiler: true,

    images: {
        qualities: [70, 75, 80, 90],

        formats: ["image/avif", "image/webp"],
    },
};

export default nextConfig;
