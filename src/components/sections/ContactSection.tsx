"use client";
import Link from "next/link";
import { FadeIn } from "../ui/FadeIn";
import { Section, SectionHeading, SectionLabel } from "../ui/Section";

export function ContactSection({ innerRef }: { innerRef?: React.RefObject<HTMLElement | null> }) {
  return (
    <Section innerRef={innerRef} bg="linear-gradient(180deg, var(--white), var(--cream))">
      <FadeIn>
        <SectionLabel text="Da el primer paso" color="var(--green)" />
        <SectionHeading>Análisis de tu crédito <span style={{ color: "var(--green)" }}>100% gratis</span></SectionHeading>
        <p style={{ color: "var(--gray)", fontSize: 14, textAlign: "center", marginBottom: 40, lineHeight: 1.65, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
          Responde 10 preguntas y en menos de 24 horas recibes tu proyección personalizada. Sin costo. Sin compromiso.
        </p>
      </FadeIn>

      <FadeIn delay={0.12}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <Link
              href="/formulario"
              style={{
                display: "inline-block", padding: "20px 48px", borderRadius: 20,
                background: "var(--blue)", color: "var(--white)", fontSize: 18, fontWeight: 800,
                textDecoration: "none", boxShadow: "0 10px 30px rgba(30,58,95,0.25)",
                transition: "all 0.3s ease", marginBottom: 16,
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 15px 40px rgba(30,58,95,0.35)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(30,58,95,0.25)"; }}
            >
              SOLICITAR ANÁLISIS GRATUITO →
            </Link>
            <p style={{
              color: "#D64045", fontSize: 13, fontWeight: 800, letterSpacing: "0.5px", margin: 0,
              textTransform: "uppercase", opacity: 0.9
            }}>
              CADA DIA QUE POSTERGAS ESTA DECISION PIERDES MILLONES
            </p>
          </div>
        </div>
      </FadeIn>

      <footer style={{ marginTop: 120, paddingTop: 40, borderTop: `1px solid var(--gray-border)`, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
        <p style={{ color: "var(--gray-light)", fontSize: 13 }}>© 2026 Mi Guía Financiero. Todos los derechos reservados.</p>
        <div style={{ display: "flex", gap: 24 }}>
          <Link href="/privacidad" style={{ color: "var(--blue-mid)", fontSize: 13, fontWeight: 600, cursor: "pointer", textDecoration: "none" }}>Política de Privacidad</Link>
          <Link href="/ley546" style={{ color: "var(--blue-mid)", fontSize: 13, fontWeight: 600, cursor: "pointer", textDecoration: "none" }}>Ley 546</Link>
        </div>
      </footer>
    </Section>
  );
}
