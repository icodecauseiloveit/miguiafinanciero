"use client";
import { FadeIn } from "../ui/FadeIn";
import { Section, SectionHeading, SectionLabel, Highlight } from "../ui/Section";

export function GuaranteeSection({ id }: { id?: string }) {
  const guaranteeItems = [
    { icon: "✅", title: "Sin anticipos", desc: "Cero pesos hasta ver resultados." },
    { icon: "📄", title: "Confirmación del banco", desc: "Solo cobramos con documento escrito." },
    { icon: "🤝", title: "Cero riesgo para ti", desc: "Si no se aplica, no debes nada." },
  ];

  return (
    <Section id={id} bg="var(--white)">
      <FadeIn>
        <div style={{
          borderRadius: 30, padding: "56px 44px", textAlign: "center",
          position: "relative", overflow: "hidden",
          background: `linear-gradient(160deg, var(--cream), var(--white), var(--cream))`,
          border: `2px solid var(--yellow)`,
          boxShadow: `0 20px 60px var(--yellow-soft)`,
        }}>
          {/* Corner decoration */}
          <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: "50%", background: "var(--yellow-glow)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -20, left: -20, width: 80, height: 80, borderRadius: "50%", background: "var(--yellow-soft)", pointerEvents: "none" }} />

          <div style={{
            width: 76, height: 76, borderRadius: "50%", margin: "0 auto 24px",
            background: `linear-gradient(135deg, var(--yellow), var(--yellow-muted))`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 36, boxShadow: `0 6px 20px var(--yellow-soft)`,
          }}>🛡️</div>

          <SectionLabel text="Nuestra garantía" />
          <h2 style={{
            fontFamily: "var(--font-merriweather)", fontSize: "clamp(22px, 3.5vw, 34px)",
            fontWeight: 900, lineHeight: 1.25, marginBottom: 22, color: "var(--blue)",
          }}>
            Solo pagas cuando tu banco confirme<br /><Highlight>el beneficio aplicado</Highlight>
          </h2>
          <p style={{ color: "var(--gray)", fontSize: 15, lineHeight: 1.8, maxWidth: 560, margin: "0 auto 36px" }}>
            No cobramos anticipos, consultas ni gestión. Solo pagas un porcentaje del ahorro cuando recibas la confirmación oficial y escrita de tu entidad financiera.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14, maxWidth: 620, margin: "0 auto" }}>
            {guaranteeItems.map((item, i) => (
              <div key={i} style={{
                padding: 22, borderRadius: 18, background: "var(--white)",
                border: `1px solid var(--gray-border)`, textAlign: "center",
                boxShadow: "0 2px 10px rgba(30,58,95,0.03)",
              }}>
                <span style={{ fontSize: 26, display: "block", marginBottom: 10 }}>{item.icon}</span>
                <h4 style={{ fontSize: 13, fontWeight: 700, margin: "0 0 6px", color: "var(--blue)" }}>{item.title}</h4>
                <p style={{ color: "var(--gray)", fontSize: 12, lineHeight: 1.55, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <p style={{
            marginTop: 32, marginBottom: 0,
            color: "var(--blue)", fontSize: 16, fontWeight: 800,
            fontFamily: "var(--font-merriweather)", fontStyle: "italic",
          }}>
            "Si tú no ganas, nosotros tampoco."
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}
