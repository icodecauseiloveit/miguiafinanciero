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
    <Section id={id} className="mesh-bg">
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
            <div 
              className="glass-card"
              style={{
                borderRadius: 22, padding: 32,
                border: `1.5px solid rgba(214, 64, 69, 0.3)`, height: "100%",
                transition: "all 0.35s cubic-bezier(.22,1,.36,1)",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden"
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 15px 40px rgba(214, 64, 69, 0.15)"; e.currentTarget.style.borderColor = "var(--red)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(30, 58, 95, 0.05)"; e.currentTarget.style.borderColor = "rgba(214, 64, 69, 0.3)"; }}
            >
              {/* Decorative gradient blob inside card */}
              <div style={{ position: "absolute", top: -30, right: -30, width: 100, height: 100, background: "var(--red)", opacity: 0.05, borderRadius: "50%", filter: "blur(20px)" }} />
              
              <div style={{
                width: 56, height: 56, borderRadius: 18, marginBottom: 20,
                background: "var(--white)", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 26, boxShadow: "0 6px 16px rgba(214, 64, 69, 0.12)",
                border: "1px solid rgba(214, 64, 69, 0.1)"
              }}>{item.icon}</div>
              <h3 style={{ color: "var(--red)", fontSize: 19, fontWeight: 800, marginBottom: 12, fontFamily: "var(--font-merriweather)", letterSpacing: "-0.5px" }}>{item.title}</h3>
              <p style={{ color: "var(--gray)", fontSize: 15, lineHeight: 1.6, margin: 0, fontWeight: 500 }}>{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
      <CTAButton />
    </Section>
  );
}
