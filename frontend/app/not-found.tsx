import Link from "next/link";
import { Logo } from "@/components/branding";

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col bg-[var(--background)]">
            <section className="flex flex-1 items-center justify-center px-6 py-16">
                <div className="w-full max-w-xl text-center">
                    <Logo layout="square" variant="brown" width={100} />

                    <h1 className="type-heading text-4xl font-bold text-[var(--font-primary)] md:text-5xl">
                        Oops!
                    </h1>

                    <p className="mt-6 text-base leading-8 text-[var(--font-secondary)]">
                        Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
                    </p>

                    <p className="mt-2 text-base leading-8 text-[var(--font-secondary)]">
                        Silakan jelajahi Arsip Dapur 26 untuk melihat produk, marketplace, dan
                        informasi terbaru.
                    </p>

                    {/* <Link
                        href="https://linktr.ee/arsipdapur26"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-10 inline-flex h-12 items-center justify-center rounded-xl bg-[var(--button-secondary)] px-8 font-medium !text-[#ffffff] transition-all duration-300 hover:bg-[var(--button-secondary-hover)] hover:shadow-lg"
                    >
                        Jelajahi Arsip Dapur 26
                    </Link> */}
                    <Link href="#" className="bg-[var(--button-secondary)] px-8 py-3 text-white">
                        TEST
                    </Link>
                </div>
            </section>
        </main>
    );
}
