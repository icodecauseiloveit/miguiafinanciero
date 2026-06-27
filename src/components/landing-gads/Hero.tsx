"use client";

interface HeroProps {
  onContactClick: () => void;
  onSimClick: () => void;
}

export function Hero({ onContactClick, onSimClick }: HeroProps) {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center",
      padding: "130px 28px 90px", position: "relative", overflow: "hidden",
      background: `linear-gradient(135deg, var(--blue), var(--blue-dark))`
    }}>
      {/* Background decoration removed per user request */}

      <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        {/* Alert Pill */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "10px 24px", borderRadius: 40,
          background: "rgba(255, 255, 255, 0.1)", border: "1px solid rgba(255, 255, 255, 0.2)",
          marginBottom: 36, animation: "fadeUp 0.4s ease",
          backdropFilter: "blur(8px)",
        }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--green)", animation: "pulse 2s infinite", boxShadow: "0 0 10px var(--green)" }} />
          <span style={{ color: "var(--white)", fontSize: 13, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase" }}>Evaluación Inicial 100% Gratuita</span>
        </div>

        <h1 style={{
          fontFamily: "var(--font-merriweather)",
          fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 900,
          lineHeight: 1.12, margin: "0 0 28px", color: "var(--white)",
          animation: "fadeUp 0.6s ease",
          letterSpacing: "-1px",
          textShadow: "0 4px 20px rgba(0,0,0,0.3)"
        }}>
          Optimiza tu crédito{" "}
          <span style={{ color: "var(--yellow)", position: "relative", display: "inline-block", textShadow: "none" }}>
            hipotecario
            <svg style={{ position: "absolute", bottom: -8, left: -5, width: "110%", height: 18 }} viewBox="0 0 200 12" preserveAspectRatio="none">
              <path d="M2 8 Q50 2 100 7 Q150 12 198 5" fill="none" stroke="var(--yellow)" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
            </svg>
          </span>{" "}
          con la Ley 546
        </h1>

        <p style={{
          fontSize: "clamp(16px, 2.2vw, 21px)", color: "rgba(255, 255, 255, 0.85)", lineHeight: 1.7,
          maxWidth: 640, margin: "0 auto 48px", animation: "fadeUp 0.8s ease",
          fontWeight: 400
        }}>
          Te asesoramos para implementar una estrategia inteligente de abonos a capital. Reduce años de plazo y elimina el pago excesivo de intereses, todo respaldado por{" "}
          <strong style={{ color: "var(--yellow)", fontWeight: 800 }}>la Ley 546 vigente</strong>.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", animation: "fadeUp 1s ease" }}>
          <a href="/formulario" style={{
            display: "inline-flex", alignItems: "center", gap: 10, padding: "18px 46px", borderRadius: 16, border: "none", cursor: "pointer",
            background: "linear-gradient(90deg, #F2B705 0%, #FFA000 50%, #F2B705 100%)", backgroundSize: "200% auto",
            color: "var(--blue-dark)", fontSize: 17, fontWeight: 900, letterSpacing: 0.3, textDecoration: "none",
            boxShadow: `0 12px 30px rgba(242, 183, 5, 0.3)`,
            transition: "all 0.3s cubic-bezier(.22,1,.36,1)", animation: "shimmer 4s infinite linear"
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(242, 183, 5, 0.4)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 12px 30px rgba(242, 183, 5, 0.3)"; }}
          >
            Quiero mi análisis gratis
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <button onClick={onSimClick} style={{
            padding: "18px 42px", borderRadius: 16, cursor: "pointer",
            background: "rgba(255, 255, 255, 0.1)", border: `2px solid rgba(255, 255, 255, 0.5)`,
            color: "var(--white)", fontSize: 17, fontWeight: 700, letterSpacing: 0.3,
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)", transition: "all 0.25s ease",
            backdropFilter: "blur(8px)"
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            📊 Ver cuánto ahorro
          </button>
        </div>

        {/* Trust Badges */}
        <div style={{ marginTop: 64, display: "flex", alignItems: "center", justifyContent: "center", gap: "2vw", flexWrap: "wrap", animation: "fadeUp 1.2s ease", opacity: 0.9 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 24 }}>⚖️</span>
            <span style={{ color: "var(--white)", fontSize: 13, fontWeight: 700, textAlign: "left", lineHeight: 1.2 }}>Amparado bajo<br/>Ley 546</span>
          </div>
          <div style={{ width: 1, height: 30, background: "rgba(255,255,255,0.2)" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 24 }}>🛡️</span>
            <span style={{ color: "var(--white)", fontSize: 13, fontWeight: 700, textAlign: "left", lineHeight: 1.2 }}>Cifrado SSL<br/>256-bit Seguro</span>
          </div>
          <div style={{ width: 1, height: 30, background: "rgba(255,255,255,0.2)" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 24 }}>⭐</span>
            <span style={{ color: "var(--white)", fontSize: 13, fontWeight: 700, textAlign: "left", lineHeight: 1.2 }}>+320 Familias<br/>Beneficiadas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
