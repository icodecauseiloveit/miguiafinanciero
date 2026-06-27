"use client";
import { FadeIn } from "../ui/FadeIn";
import { Section, SectionHeading, SectionLabel, Highlight } from "../ui/Section";
import { CTAButton } from "../ui/CTAButton";

export function SolucionSection({ id }: { id?: string }) {
  const steps = [
    { s: "1", t: "Análisis gratis", d: "Estudiamos tu crédito y calculamos cuánto puedes ahorrarte. Sin costo." },
    { s: "2", t: "Plan de acción", d: "Diseñamos tres propuestas de ahorro y tú eliges la que más se adapta a ti." },
    { s: "3", t: "Gestión con el banco", d: "Nos encargamos del trámite. Hablamos el idioma técnico por ti." },
    { s: "4", t: "Resultados reales", d: "Ves cada mes en tu extracto cómo baja el saldo y se acorta el plazo." },
  ];

  return (
    <Section id={id} bg="linear-gradient(180deg, var(--cream) 0%, var(--cream-deep) 50%, var(--cream) 100%)">
      <FadeIn>
        <SectionLabel text="Asesoría especializada" color="var(--green)" />
        <SectionHeading>
          Conoce cómo funciona la <Highlight>Ley 546</Highlight> a tu favor
        </SectionHeading>
        <p style={{ color: "var(--gray)", fontSize: 16, textAlign: "center", maxWidth: 580, margin: "0 auto 56px", lineHeight: 1.75 }}>
          Te explicamos cómo optimizar tu crédito hipotecario, estructurando un incremento en tu cuota que permita dirigir un mayor porcentaje hacia el abono a capital. Menos plazo, mayor eficiencia.
        </p>
      </FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
        {steps.map((item, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div 
              className="glass-card"
              style={{
                textAlign: "center", padding: "32px 20px",
                borderRadius: 24, cursor: "default",
                transition: "all 0.4s cubic-bezier(.22,1,.36,1)",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 15px 35px rgba(37, 211, 102, 0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(30, 58, 95, 0.05)"; }}
            >
              <div style={{
                width: 60, height: 60, borderRadius: 20, margin: "0 auto 20px",
                background: `linear-gradient(135deg, var(--green-dark), var(--green))`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22, fontWeight: 900, color: "var(--white)",
                fontFamily: "var(--font-merriweather)",
                boxShadow: "0 6px 20px rgba(37, 211, 102, 0.3)",
              }}>{item.s}</div>
              <h4 style={{ fontSize: 17, fontWeight: 800, marginBottom: 10, color: "var(--blue)" }}>{item.t}</h4>
              <p style={{ color: "var(--gray)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{item.d}</p>
            </div>
          </FadeIn>
        ))}
      </div>
      <CTAButton />
    </Section>
  );
}
