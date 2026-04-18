// src/app/layout.tsx
import "./globals.css";
// Импорт стилей Mantine (обязательно для Next.js 14+)
import '@mantine/core/styles.css';

// @ts-ignore
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Montserrat, Poppins } from 'next/font/google';
import { ReactNode } from "react";

// Настройка шрифтов
const montserrat = Montserrat({ subsets: ['cyrillic', 'latin'], variable: '--font-montserrat' });
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'], variable: '--font-poppins' });

export const metadata = {
  title: "INAI.KG - Кыргызско-Германский институт прикладной информатики",
  description: "Единственный вуз в образовательном секторе Кыргызстана, специализирующийся в области компьютерных наук.",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: ReactNode;
}) {
  return (
      <html lang="ru" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${montserrat.variable} ${poppins.variable} font-montserrat antialiased m-0`} suppressHydrationWarning>
      <MantineProvider>
        {children}
      </MantineProvider>
      </body>
      </html>
  );
}