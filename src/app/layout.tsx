/* import "./globals.css";
import '@mantine/core/styles.css';

import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Montserrat, Poppins } from 'next/font/google';
import { ReactNode } from "react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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

                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
        </MantineProvider>
        </body>
        </html>
    );
} */

import "./globals.css";
import '@mantine/core/styles.css';

import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Montserrat, Poppins } from 'next/font/google';
import { ReactNode } from "react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
            {/* 1. Указываем defaultColorScheme="auto" для скрипта */}
            <ColorSchemeScript defaultColorScheme="auto" />
        </head>
        {/* 2. Добавляем базовые классы цвета и плавного перехода для всего сайта */}
        <body 
            className={`${montserrat.variable} ${poppins.variable} font-montserrat antialiased m-0 bg-white dark:bg-[#0a0a0a] transition-colors duration-300`} 
            suppressHydrationWarning
        >
        {/* 3. Передаем defaultColorScheme="auto" в провайдер Mantine */}
        <MantineProvider defaultColorScheme="auto">
            <div className="flex flex-col min-h-screen">
                <Header />
                
                {/* Добавляем flex-grow для main, чтобы он занимал всё место и толкал футер вниз */}
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