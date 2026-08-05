import { Logo, LOGO_SIZE } from "@/components/branding/Logo/index";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/config/site.config";

export default function NotFound() {
    return (
        <main className="min-h-dvh bg-[var(--background)]">
            <section className="grid min-h-dvh grid-rows-[1fr_auto_1fr] px-6 py-12">
                {/* Logo */}
                <div className="flex items-end justify-center pb-2">
                    <Logo layout="square" variant="brown" className={LOGO_SIZE.NOTFOUND} />
                </div>

                {/* Content */}
                <div className="mx-auto flex w-full max-w-lg flex-col items-center text-center">
                    <p className="text-sm font-medium tracking-[0.25em] text-[var(--font-secondary)] uppercase">
                        Error 404
                    </p>

                    <h1 className="type-heading mt-1 text-5xl font-bold text-[var(--font-primary)] md:text-6xl">
                        Oops!
                    </h1>

                    <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--font-secondary)]">
                        Maaf, halaman yang Anda cari tidak dapat ditemukan.
                    </p>

                    <p className="mt-2 max-w-md text-base leading-tight text-[var(--font-secondary)]">
                        Yuk kembali menjelajahi Arsip Dapur 26 dan temukan berbagai produk, cerita,
                        serta informasi terbaru.
                    </p>

                    <Button
                        href={SITE.url}
                        external
                        variant="primary"
                        className="mt-10 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                        Jelajahi Arsip Dapur 26
                    </Button>
                </div>

                {/* Spacer */}
                <div />
            </section>
        </main>
    );
}
