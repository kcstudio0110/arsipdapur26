import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

import { REDIRECT, RedirectKey } from "@/config/redirect.config";

interface RedirectRouteProps {
    params: Promise<{
        redirect: string;
    }>;
}

function isRedirectKey(value: string): value is RedirectKey {
    return value in REDIRECT;
}

export async function GET(request: NextRequest, { params }: RedirectRouteProps) {
    const { redirect } = await params;

    if (!isRedirectKey(redirect)) {
        notFound();
    }

    const destination = new URL(REDIRECT[redirect]);

    request.nextUrl.searchParams.forEach((value, key) => {
        destination.searchParams.set(key, value);
    });

    return NextResponse.redirect(destination, 302);
}
