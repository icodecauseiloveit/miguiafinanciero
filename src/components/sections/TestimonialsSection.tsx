"use client";
import { FadeIn } from "../ui/FadeIn";
import { Section, SectionHeading, SectionLabel } from "../ui/Section";

export function TestimonialsSection() {
  const testimonios = [
    { nombre: "Carolina M.", ciudad: "Bogotá", ahorro: "$92M", plazo: "18 años menos", texto: "Tenía un crédito de $210M en UVR y sentía que nunca iba a terminar. Mi Guía Financiero me ayudó a reestructurar y ahora termino en 12 años, no en 30." },
    { nombre: "Andrés P.", ciudad: "Medellín", ahorro: "$67M", plazo: "14 años menos", texto: "El banco me decía que no se podía. Mi Guía Financiero me mostró el Artículo 17 de la Ley 546 y ahora mis abonos van directo a capital." },
    { nombre: "Diana y Jorge R.", ciudad: "Cali", ahorro: "$115M", plazo: "16 años menos", texto: "Pagamos cuota hace 5 años y debíamos MÁS de lo que nos prestaron. Con la reestructuración finalmente avanzamos." },
  ];

  return (
    <Section bg="linear-gradient(180deg, var(--cream), var(--cream-deep), var(--cream))">
      <FadeIn>
        <SectionLabel text="Historias reales" color="var(--green)" />
        <SectionHeading>Ellos ya <span style={{ color: "var(--green)" }}>dejaron de regalarle</span> al banco</SectionHeading>
        <div style={{ height: 20 }} />
      </FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: 20 }}>
        {testimonios.map((t, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div style={{
              padding: 30, borderRadius: 22, background: "var(--white)", height: "100%",
              display: "flex", flexDirection: "column",
              border: "1px solid rgba(30,58,95,0.06)",
              boxShadow: "0 4px 20px rgba(30,58,95,0.04)",
              transition: "all 0.3s ease",
            }}>
              <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                {[...Array(5)].map((_, j) => <span key={j} style={{ color: "var(--yellow)", fontSize: 17 }}>★</span>)}
              </div>
              <p style={{ color: "var(--gray)", fontSize: 14, lineHeight: 1.75, margin: "0 0 24px", flex: 1, fontStyle: "italic" }}>"{t.texto}"</p>
              <div style={{
                borderTop: `1px solid var(--gray-border)`, paddingTop: 18,
                display: "flex", justifyContent: "space-between", alignItems: "flex-end",
              }}>
                <div>
                  <p style={{ color: "var(--blue)", fontWeight: 700, fontSize: 14, margin: "0 0 3px" }}>{t.nombre}</p>
                  <p style={{ color: "var(--gray-light)", fontSize: 12, margin: 0 }}>{t.ciudad}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ color: "var(--green)", fontWeight: 900, fontSize: 20, margin: "0 0 2px", fontFamily: "var(--font-merriweather)" }}>{t.ahorro}</p>
                  <p style={{ color: "var(--gray-light)", fontSize: 11, margin: 0 }}>{t.plazo}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
