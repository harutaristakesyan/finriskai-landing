import React from "react";
import type {Metadata} from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import './globals.css';

export const metadata: Metadata = {
    title: "FinRiskAI – Financial Intelligence. Automated.",
    description: "AI-powered platform for real-time financial risk detection, analysis, and reporting.",
    icons: {
        icon: [
            {url: "/favicon-16x16.png", sizes: "16x16", type: "image/png"},
            {url: "/favicon-32x32.png", sizes: "32x32", type: "image/png"},
        ],
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
