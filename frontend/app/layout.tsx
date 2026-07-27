import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "Arsip Dapur 26",
        template: "%s | Arsip Dapur 26",
    },
    description: "Rasa Lama, Cara Baru.",

    icons: {
        icon: "/branding/favicon/favicon.ico",

        apple: "/branding/app-icons/apple-touch-icon.png",
    },

    manifest: "/site.webmanifest",
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
