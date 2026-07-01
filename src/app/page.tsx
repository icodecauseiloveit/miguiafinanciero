"use client";
import { useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/landing-gads/Hero";
import { Ticker } from "@/components/landing/Ticker";
import { ProblemSection } from "@/components/landing-gads/ProblemSection";
import { SolucionSection } from "@/components/landing-gads/SolucionSection";
import { StatsSection } from "@/components/landing/StatsSection";
import { SimuladorSection } from "@/components/landing/SimuladorSection";
import { DerechosSection } from "@/components/landing-gads/DerechosSection";
import { TestimonialsSection } from "@/components/landing-gads/TestimonialsSection";
import { GuaranteeSection } from "@/components/landing/GuaranteeSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { ContactSection } from "@/components/landing/ContactSection";

export default function Home() {
  const simRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main style={{ fontFamily: "var(--font-dm-sans)", minHeight: "100vh", overflowX: "hidden" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            name: "Mi Guía Financiero",
            url: "https://miguiafinanciero.com",
            logo: "https://miguiafinanciero.com/logo-mgf.png",
            description: "Asesoría y acompañamiento para la reestructuración y optimización de créditos hipotecarios bajo la Ley 546 de 1999.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Cartagena",
              addressCountry: "CO"
            }
          })
        }}
      />
      <Navbar onContactClick={() => scrollTo(contactRef)} />
      
      <Hero 
        onContactClick={() => scrollTo(contactRef)} 
        onSimClick={() => scrollTo(simRef)} 
      />
      
      <Ticker />
      
      <ProblemSection id="problema" />
      
      <SolucionSection id="solucion" />
      
      <StatsSection id="estadisticas" />
      
      <SimuladorSection innerRef={simRef} id="simulador" />
      
      <DerechosSection id="derechos" />
      
      <TestimonialsSection id="testimonios" />
      
      <GuaranteeSection id="garantia" />
      
      <FAQSection id="faq" />
      
      <ContactSection innerRef={contactRef} id="contacto" />
    </main>
  );
}
