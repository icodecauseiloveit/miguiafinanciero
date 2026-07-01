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
  metadataBase: new URL("https://miguiafinanciero.com"),
  title: "Mi Guía Financiero | Paga tu casa en años, no en décadas",
  description: "Te representamos ante tu entidad financiera para hacer valer la Ley 546 de 1999 y reestructurar tu crédito hipotecario.",
  keywords: [
    "abono inteligente a capital",
    "optimización de crédito hipotecario",
    "Cómo pagar menos intereses en un crédito hipotecario",
    "reducir el plazo en mi crédito hipotecario",
    "Modificación en la aplicación de pagos",
    "Cómo disminuir el tiempo de un crédito hipotecario",
    "Ley de vivienda",
    "Ley 546 de 1999",
    "estrategias para pagar menos intereses en mi crédito de vivienda",
    "saldar mi hipoteca antes de tiempo"
  ],
  openGraph: {
    title: "Miguíafinanciero | Reduce el tiempo de tu crédito hipotecario",
description: "Te acompañamos en el análisis y gestión de tu crédito hipotecario para identificar oportunidades de ahorro y optimización bajo la Ley 546 de 1999.",
    url: "https://miguiafinanciero.com",
    siteName: "Mi Guía Financiero",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/og_image_191.png",
        width: 1200,
        height: 630,
        alt: "Mi Guía Financiero - Logo Rectangular",
      },
      {
        url: "/og_image_11.png",
        width: 1200,
        height: 1200,
        alt: "Mi Guía Financiero - Logo Cuadrado",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Guía Financiero | Paga tu casa en años, no en décadas",
    description: "Te representamos ante tu entidad financiera para hacer valer la Ley 546 de 1999 y reestructurar tu crédito hipotecario.",
    images: ["/logo-mgf.png"],
  },
  verification: {
    other: {
      "facebook-domain-verification": ["oaxfamhe1k4kci3donh4smxief0u5b"],
    },
  },
};

import { Providers } from "./providers";
import Script from "next/script";
import { Suspense } from "react";
import SourceTracker from "@/components/SourceTracker";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KPQGMHDF');
          `}
        </Script>
      </head>
      <body className={`${merriweather.variable} ${dmSans.variable}`} suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-KPQGMHDF"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Suspense fallback={null}>
          <SourceTracker />
        </Suspense>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
