import type { Metadata } from "next";
import { Merriweather, DM_Sans } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mi Guía Financiero | Paga tu casa en años, no en décadas",
  description: "Te representamos ante tu entidad financiera para hacer valer la Ley 546 de 1999 y reestructurar tu crédito hipotecario.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${merriweather.variable} ${dmSans.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
