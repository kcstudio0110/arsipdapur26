import { Section } from "@/components/layout/Section";
import { Typography, TYPOGRAPHY_VARIANTS } from "@/components/ui/Typography";

import { Split } from "@/components/compositions/Composition/layouts/Split";

import { PRODUCT_CONFIGS } from "./configs";

export function Product() {
    return (
        <Section id="products">
            <div className="mx-auto max-w-5xl text-center">
                <Typography as="p" variant={TYPOGRAPHY_VARIANTS.OVERLINE}>
                    Produk Kami
                </Typography>

                <Typography as="h2" variant={TYPOGRAPHY_VARIANTS.HEADING}>
                    Solusi Praktis untuk Memasak Setiap Hari
                </Typography>

                <Typography as="p" variant={TYPOGRAPHY_VARIANTS.BODY}>
                    Arsip Dapur 26 menghadirkan produk yang dibuat dari resep keluarga dan rempah
                    pilihan untuk membantu aktivitas memasak menjadi lebih mudah tanpa mengurangi
                    cita rasa masakan rumahan.
                </Typography>
            </div>

            <div className="mx-auto mt-8 max-w-7xl">
                {PRODUCT_CONFIGS.map((config) => (
                    <Split key={config.id} config={config} />
                ))}
            </div>
        </Section>
    );
}
