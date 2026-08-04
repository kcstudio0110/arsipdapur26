import { Inter, Italianno, Playfair_Display, Google_Sans } from "next/font/google";

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});
export const google_sans = Google_Sans({
    subsets: ["latin"],
    variable: "--font-google-sans",
});

export const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-heading",
});

export const handwritten = Italianno({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-script",
});
