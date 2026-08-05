import { Hero } from "@/components/sections/Hero";

import { Navbar } from "@/components/layout/Navbar";
import { Social } from "@/components/sections/Social";
import { Product } from "@/components/sections/Product";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
    return (
        <>
            <Navbar />

            <Hero />

            <Social />

            <Product />

            <Footer />
        </>
    );
}
