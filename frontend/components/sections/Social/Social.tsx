import { Section } from "@/components/layout/Section";

import { Card } from "@/components/ui/Card";
import { Typography, TYPOGRAPHY_VARIANTS } from "@/components/ui/Typography";

export function Social() {
    return (
        <Section>
            <div className="mx-auto max-w-3xl text-center">
                <Typography variant={TYPOGRAPHY_VARIANTS.OVERLINE}>Temukan Kami</Typography>

                <Typography variant={TYPOGRAPHY_VARIANTS.HEADING}>Platform Favoritmu</Typography>

                <Typography variant={TYPOGRAPHY_VARIANTS.BODY}>
                    Ikuti perjalanan Arsip Dapur 26 atau pesan langsung melalui platform favoritmu.
                </Typography>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                <Card className="p-8">Instagram</Card>

                <Card className="p-8">WhatsApp</Card>

                <Card className="p-8">Tokopedia</Card>

                <Card className="p-8">Shopee</Card>
            </div>
        </Section>
    );
}
