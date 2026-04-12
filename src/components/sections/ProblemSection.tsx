"use client";
import { FadeIn } from "../ui/FadeIn";
import { Section, SectionHeading, SectionLabel } from "../ui/Section";

export function ProblemSection({ id }: { id?: string }) {
  const problems = [
    { icon: "📈", title: "Has pagado millones", desc: "Solo en intereses has entregado fortunas al banco y tu deuda no baja." },
    { icon: "💸", title: "Te mienten con el FRECH", desc: "Los bancos te mienten cuando dicen que perderás el subsidio FRECH si pagas de manera anticipada. Es tu derecho y puedes mantenerlo." },
    { icon: "🛑", title: "Abonos mal aplicados", desc: "Si pagas adelantado, el banco suele abonar a cuotas futuras pero NO impacta el capital. Sigues pagando los mismos intereses por años." },
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
    </Section>
  );
}
