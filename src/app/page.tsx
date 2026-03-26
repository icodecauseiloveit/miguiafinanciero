"use client";
import { useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolucionSection } from "@/components/sections/SolucionSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { SimuladorSection } from "@/components/sections/SimuladorSection";
import { DerechosSection } from "@/components/sections/DerechosSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  const simRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main style={{ fontFamily: "var(--font-dm-sans)", minHeight: "100vh", overflowX: "hidden" }}>
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
