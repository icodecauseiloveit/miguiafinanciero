"use client";
import { FadeIn } from "../ui/FadeIn";
import { Section, SectionHeading, SectionLabel, Highlight } from "../ui/Section";
import { CTAButton } from "../ui/CTAButton";

export function GuaranteeSection({ id }: { id?: string }) {
  const guaranteeItems = [
    { icon: "✅", title: "Sin anticipos", desc: "Cero pesos hasta ver resultados." },
    { icon: "📄", title: "Confirmación del banco", desc: "Solo cobramos con documento escrito." },
    { icon: "🤝", title: "Honorarios por éxito", desc: "Solo facturamos si hay beneficio real." },
  ];

  return (
    <Section id={id} bg="var(--white)">
      <FadeIn>
        <div style={{
          borderRadius: 32, padding: "64px 44px", textAlign: "center",
          position: "relative", overflow: "hidden",
          background: `var(--blue-dark)`,
          border: `2px solid var(--yellow)`,
          boxShadow: `0 24px 70px rgba(19, 42, 69, 0.4), inset 0 0 100px rgba(0,0,0,0.5)`,
        }}>
          {/* Certificate decorative borders */}
          <div style={{ position: "absolute", top: 12, left: 12, right: 12, bottom: 12, border: "1px solid rgba(242, 183, 5, 0.2)", borderRadius: 20, pointerEvents: "none" }} />
          
          {/* Glowing blobs */}
          <div style={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, borderRadius: "50%", background: "var(--yellow)", opacity: 0.05, filter: "blur(40px)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -50, left: -50, width: 150, height: 150, borderRadius: "50%", background: "var(--blue-mid)", opacity: 0.3, filter: "blur(40px)", pointerEvents: "none" }} />

          <div style={{
            width: 88, height: 88, borderRadius: "50%", margin: "0 auto 28px",
            background: `linear-gradient(135deg, var(--yellow), #FFA000)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 40, boxShadow: `0 0 0 8px rgba(242, 183, 5, 0.1), 0 10px 30px rgba(242, 183, 5, 0.3)`,
            position: "relative", zIndex: 2
          }}>🛡️</div>

          <p style={{
            color: "var(--yellow)", fontSize: 13, fontWeight: 800,
            textTransform: "uppercase", letterSpacing: 5, marginBottom: 16,
            textAlign: "center", fontFamily: "var(--font-dm-sans)",
          }}>Nuestro Compromiso de Servicio</p>
          
          <h2 style={{
            fontFamily: "var(--font-merriweather)", fontSize: "clamp(26px, 4vw, 40px)",
            fontWeight: 900, lineHeight: 1.25, marginBottom: 24, color: "var(--white)",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)"
          }}>
            Nuestros honorarios se facturan al<br /><span style={{ color: "var(--yellow)" }}>confirmar el beneficio</span>
          </h2>
          
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, lineHeight: 1.8, maxWidth: 620, margin: "0 auto 48px", fontWeight: 400 }}>
            No cobramos anticipos ni cargos por el estudio inicial. Solo facturamos nuestros honorarios <strong style={{ color: "var(--white)" }}>después</strong> de que recibas la confirmación oficial y escrita por parte de tu entidad financiera de que el beneficio ha sido aplicado, sujeto a las políticas de tu banco.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, maxWidth: 680, margin: "0 auto", position: "relative", zIndex: 2 }}>
            {guaranteeItems.map((item, i) => (
              <div key={i} style={{
                padding: "24px 20px", borderRadius: 20, background: "rgba(38, 75, 115, 0.3)",
                border: `1px solid rgba(255,255,255,0.1)`, textAlign: "center",
                backdropFilter: "blur(10px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              }}>
                <span style={{ fontSize: 28, display: "block", marginBottom: 12 }}>{item.icon}</span>
                <h4 style={{ fontSize: 14, fontWeight: 700, margin: "0 0 8px", color: "var(--white)" }}>{item.title}</h4>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40, paddingTop: 30, borderTop: "1px solid rgba(255,255,255,0.1)", maxWidth: 400, margin: "40px auto 0" }}>
            <p style={{
              margin: 0, color: "var(--yellow)", fontSize: 18, fontWeight: 800,
              fontFamily: "var(--font-merriweather)", fontStyle: "italic",
            }}>
              "Estamos comprometidos con tus objetivos financieros."
            </p>
          </div>
        </div>
      </FadeIn>
      <CTAButton />
    </Section>
  );
}
