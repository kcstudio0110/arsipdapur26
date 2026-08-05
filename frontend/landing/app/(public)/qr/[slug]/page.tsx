import { notFound, redirect } from "next/navigation";

import { getRedirect } from "@/features/qr/services/qr.service";

interface QRPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function QRPage({ params }: QRPageProps) {
    const { slug } = await params;

    const destination = getRedirect(slug);

    if (!destination) {
        notFound();
    }

    redirect(destination);
}
