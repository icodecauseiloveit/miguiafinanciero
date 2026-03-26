"use client";
import { FadeIn } from "../ui/FadeIn";
import { Section, SectionHeading, SectionLabel, Highlight } from "../ui/Section";

export function SolucionSection({ id }: { id?: string }) {
  const steps = [
    { s: "1", t: "Análisis gratis", d: "Estudiamos tu crédito y calculamos cuánto puedes ahorrarte. Sin costo." },
    { s: "2", t: "Plan de acción", d: "Diseñamos la reestructuración óptima basada en la Ley 546." },
    { s: "3", t: "Gestión con el banco", d: "Nos encargamos del trámite. Hablamos el idioma técnico por ti." },
    { s: "4", t: "Resultados reales", d: "Ves cada mes en tu extracto cómo baja el saldo y se acorta el plazo." },
  ];

  return (
    <Section id={id} bg="linear-gradient(180deg, var(--cream) 0%, var(--cream-deep) 50%, var(--cream) 100%)">
      <FadeIn>
        <SectionLabel text="La solución existe — y es tu derecho" color="var(--green)" />
        <SectionHeading>
          La <Highlight>Ley 546</Highlight> está de tu lado.<br />Nosotros también.
        </SectionHeading>
        <p style={{ color: "var(--gray)", fontSize: 16, textAlign: "center", maxWidth: 580, margin: "0 auto 56px", lineHeight: 1.75 }}>
          Te representamos ante tu banco para reestructurar tu crédito. Con un aumento controlado de tu cuota, dirigimos cada peso a capital. Menos años, menos intereses, más libertad.
        </p>
      </FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
        {steps.map((item, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div style={{
              textAlign: "center", padding: "28px 20px",
              background: "rgba(255,255,255,0.7)", borderRadius: 20,
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.8)",
              transition: "all 0.3s ease",
            }}>
              <div style={{
                width: 54, height: 54, borderRadius: 16, margin: "0 auto 16px",
                background: `linear-gradient(135deg, var(--blue), var(--blue-mid))`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, fontWeight: 900, color: "var(--yellow)",
                fontFamily: "var(--font-merriweather)",
                boxShadow: "0 4px 16px rgba(30,58,95,0.2)",
              }}>{item.s}</div>
              <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: "var(--blue)" }}>{item.t}</h4>
              <p style={{ color: "var(--gray)", fontSize: 13, lineHeight: 1.65, margin: 0 }}>{item.d}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
