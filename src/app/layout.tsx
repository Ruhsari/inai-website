import "./globals.css";
import '@mantine/core/styles.css';

import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Montserrat, Poppins } from 'next/font/google';
import { ReactNode } from "react";

import { Header } from "@/src/components/layout/Header";
import { Footer } from "@/src/components/layout/Footer";

const montserrat = Montserrat({ subsets: ['cyrillic', 'latin'], variable: '--font-montserrat' });
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'], variable: '--font-poppins' });

export const metadata = {
    title: "INAI.KG - Кыргызско-Германский институт прикладной информатики",
    description: "Единственный вуз в образовательном секторе Кыргызстана, специализирующийся в области компьютерных наук.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru" suppressHydrationWarning>
        <head>
            <ColorSchemeScript />
        </head>
        <body className={`${montserrat.variable} ${poppins.variable} font-montserrat antialiased m-0`} suppressHydrationWarning>
        <MantineProvider>
            <div className="flex flex-col min-h-screen">
                <Header />
                {/* Добавляем flex-grow для main, чтобы он занимал всё место
                           и толкал футер вниз
                        */}
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
        </MantineProvider>
        </body>
        </html>
    );
}