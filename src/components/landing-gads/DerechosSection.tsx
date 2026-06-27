"use client";
import { FadeIn } from "../ui/FadeIn";
import { Section, SectionHeading, SectionLabel, Highlight } from "../ui/Section";

export function DerechosSection({ id }: { id?: string }) {
  const derechos = [
    { icon: "🎯", title: "Aplicar abonos inteligentes a capital", desc: "Reduce el plazo y ahorra en intereses abonando a capital de forma eficiente.", art: "Beneficio" },
    { icon: "🏦", title: "Mantener el mismo banco", desc: "No necesitas cambiar de entidad financiera para optimizar.", art: "Beneficio" },
    { icon: "🛡️", title: "Elegir libremente los seguros", desc: "Tienes la libertad de elegir o endosar las pólizas de vida e incendio.", art: "Beneficio" },
    { icon: "💡", title: "Conservar los subsidios del Gobierno", desc: "Mantén vigentes tus subsidios gubernamentales (como el FRECH) sin riesgo de perderlos.", art: "Beneficio" },
    { icon: "📌", title: "Mantener la tasa de interés", desc: "Las optimizaciones en tu crédito conservan intacta la tasa de interés pactada.", art: "Beneficio" },
    { icon: "🔄", title: "Cambio de sistema de amortización", desc: "Solicita el cambio de sistema de amortización si es favorable para ti.", art: "Beneficio" },
  ];

  return (
    <Section id={id} bg="var(--white)">
      <FadeIn>
        <SectionLabel text="⚖️ Marco legal vigente" />
        <SectionHeading>Conoce la normativa de la <Highlight>Ley 546</Highlight></SectionHeading>
        <p style={{ color: "var(--gray)", fontSize: 15, textAlign: "center", maxWidth: 520, margin: "0 auto 48px", lineHeight: 1.65 }}>
          Información clave para entender tus opciones financieras.
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
