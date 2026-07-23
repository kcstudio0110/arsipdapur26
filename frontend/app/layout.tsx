import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Arsip Dapur 26",
    description: "Rasa Lama, Cara Baru.",
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html lang="id">
            <body>{children}</body>
        </html>
    );
}
