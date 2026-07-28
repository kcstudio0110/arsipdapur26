import { Hero } from "@/components/sections/Hero";

import { Navbar } from "@/components/layout/Navbar";
import { Social } from "@/components/sections/Social";

export default function HomePage() {
    return (
        <>
            <Navbar />

            <Hero />

            <Social />
        </>
    );
}
