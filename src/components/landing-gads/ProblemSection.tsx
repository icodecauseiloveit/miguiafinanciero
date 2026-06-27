"use client";
import { FadeIn } from "../ui/FadeIn";
import { Section, SectionHeading, SectionLabel } from "../ui/Section";
import { CTAButton } from "../ui/CTAButton";

export function ProblemSection({ id }: { id?: string }) {
  const problems = [
    { icon: "📈", title: "Alta carga de intereses", desc: "Gran parte de tus primeras cuotas se destina a intereses en lugar de reducir tu saldo de capital." },
    { icon: "💡", title: "Desconocimiento de beneficios", desc: "Muchos temen mejorar las condiciones de su crédito por miedo a perder el subsidio FRECH." },
    { icon: "🎯", title: "Abonos no optimizados", desc: "Si realizas abonos sin la debida estructuración, el impacto en el plazo y saldo a capital puede no ser el más eficiente." },
  ];

  return (
    <Section id={id} bg="var(--white)">
      <FadeIn>
        <SectionLabel text="Desafíos comunes en créditos de vivienda" color="var(--red)" />
        <SectionHeading>
          Identifica las áreas de mejora en tu<br /><span style={{ color: "var(--red)" }}>estructura de crédito</span>
        </SectionHeading>
      </FadeIn>
      <div style={{ height: 32 }} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
        {problems.map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div style={{
              background: "var(--white)", borderRadius: 22, padding: 32,
              border: `1.5px solid var(--red)`, height: "100%",
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
      <CTAButton />
    </Section>
  );
}
