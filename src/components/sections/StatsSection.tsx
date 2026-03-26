"use client";
import { FadeIn } from "../ui/FadeIn";
import { AnimatedNumber } from "../ui/AnimatedNumber";

export function StatsSection() {
  const stats = [
    { value: 320, suffix: "+", label: "Familias ayudadas" },
    { value: 47, prefix: "$", suffix: "M", label: "Ahorro promedio" },
    { value: 14, suffix: " años", label: "Reducción de plazo" },
    { value: 98, suffix: "%", label: "Clientes satisfechos" },
  ];

  return (
    <section style={{
      padding: "80px 28px", position: "relative", overflow: "hidden",
      background: `linear-gradient(135deg, var(--blue), var(--blue-dark))`,
    }}>
      {/* Subtle pattern overlay */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: `radial-gradient(circle, var(--yellow) 1px, transparent 1px)`, backgroundSize: "32px 32px", pointerEvents: "none" }} />
      <div style={{
        maxWidth: 960, margin: "0 auto", position: "relative", zIndex: 1,
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16,
      }}>
        {stats.map((s, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div style={{
              textAlign: "center", padding: "32px 16px",
              background: "rgba(255,255,255,0.04)", borderRadius: 20,
              border: "1px solid rgba(255,255,255,0.06)",
              backdropFilter: "blur(4px)",
            }}>
              <p style={{ fontFamily: "var(--font-merriweather)", fontSize: 44, fontWeight: 900, color: "var(--yellow)", margin: "0 0 8px", lineHeight: 1 }}>
                <AnimatedNumber target={s.value} prefix={s.prefix || ""} suffix={s.suffix || ""} />
              </p>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, margin: 0, letterSpacing: 0.5, fontWeight: 500 }}>{s.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
