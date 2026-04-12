"use client";
import { FadeIn } from "../ui/FadeIn";
import { Section, SectionHeading, SectionLabel } from "../ui/Section";

export function ProblemSection({ id }: { id?: string }) {
  const problems = [
    { icon: "📈", title: "Has pagado millones", desc: "Solo en intereses has entregado fortunas al banco y tu deuda no baja." },
    { icon: "💸", title: "Pagas el TRIPLE", desc: "Un crédito de $170M a 30 años puede costar más de $500M. La diferencia son intereses para el banco." },
    { icon: "🔒", title: "No sabes que hay SALIDA", desc: "La Ley 546 te da 10+ derechos que la mayoría desconoce. El banco no tiene obligación de explicártelos." },
  ];

  return (
    <Section id={id} bg="var(--white)">
      <FadeIn>
        <SectionLabel text="El problema que nadie te explica" color="var(--red)" />
        <SectionHeading>
          Cada mes que pasa, le regalas<br /><span style={{ color: "var(--red)" }}>más dinero</span> al banco
        </SectionHeading>
      </FadeIn>
      <div style={{ height: 32 }} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
        {problems.map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div style={{
              background: "var(--white)", borderRadius: 22, padding: 32,
              border: `1.5px solid var(--gray-border)`, height: "100%",
              boxShadow: "0 4px 20px rgba(30,58,95,0.04)",
              transition: "all 0.35s cubic-bezier(.22,1,.36,1)",
              cursor: "default",
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14, marginBottom: 18,
                background: "var(--red-soft)", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 26,
              }}>{item.icon}</div>
              <h3 style={{ color: "var(--red)", fontSize: 18, fontWeight: 800, marginBottom: 10, fontFamily: "var(--font-merriweather)" }}>{item.title}</h3>
              <p style={{ color: "var(--gray)", fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
