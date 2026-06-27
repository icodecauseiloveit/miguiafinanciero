"use client";
import { FadeIn } from "../ui/FadeIn";
import { Section, SectionHeading, SectionLabel, Highlight } from "../ui/Section";

export function DerechosSection({ id }: { id?: string }) {
  const derechos = [
    { icon: "🔓", title: "Prepago sin penalidad", desc: "Abona a capital cuando quieras, sin cobros extra.", art: "Art. 17 №8" },
    { icon: "🎯", title: "Tú eliges: cuota o plazo", desc: "Decides si tu abonó reduce la cuota o el plazo.", art: "Art. 17 №8" },
    { icon: "📋", title: "Reestructuración anual", desc: "En enero y febrero puedes pedir reestructuración.", art: "Art. 20" },
    { icon: "🔄", title: "Portabilidad del crédito", desc: "Traslada tu crédito a otro banco en 10 días hábiles.", art: "Art. 24" },
    { icon: "🛡️", title: "No capitalización", desc: "Los intereses nunca se suman al capital.", art: "Art. 17 №2" },
    { icon: "📌", title: "Tasa fija garantizada", desc: "La tasa no puede cambiar en toda la vida del crédito.", art: "Art. 17 №2" },
  ];

  return (
    <Section id={id} bg="var(--white)">
      <FadeIn>
        <SectionLabel text="⚖️  Conocimiento es poder" />
        <SectionHeading>Tus derechos según la <Highlight>Ley 546</Highlight></SectionHeading>
        <p style={{ color: "var(--gray)", fontSize: 15, textAlign: "center", maxWidth: 520, margin: "0 auto 48px", lineHeight: 1.65 }}>
          El banco los conoce. Ahora tú también.
        </p>
      </FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
        {derechos.map((d, i) => (
          <FadeIn key={i} delay={i * 0.06}>
            <div style={{
              padding: 26, borderRadius: 20, background: "var(--white)", height: "100%",
              border: `1.5px solid var(--gray-border)`,
              display: "flex", gap: 16, alignItems: "flex-start",
              boxShadow: "0 2px 10px rgba(30,58,95,0.03)",
              transition: "all 0.3s ease",
            }}>
              <div style={{
                width: 46, height: 46, borderRadius: 13, flexShrink: 0,
                background: "var(--cream)", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22,
              }}>{d.icon}</div>
              <div>
                <h4 style={{ fontSize: 15, fontWeight: 700, margin: "0 0 6px", color: "var(--blue)" }}>{d.title}</h4>
                <p style={{ color: "var(--gray)", fontSize: 13, lineHeight: 1.6, margin: "0 0 10px" }}>{d.desc}</p>
                <span style={{
                  fontSize: 10.5, color: "var(--blue-mid)", fontWeight: 700,
                  background: "var(--blue-light)", padding: "4px 12px", borderRadius: 20,
                  letterSpacing: 0.5,
                }}>{d.art}</span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
