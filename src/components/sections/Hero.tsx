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
      backgroundImage: `linear-gradient(rgba(17, 33, 102, 0.80), rgba(17, 33, 102, 0.80)), url('https://picsum.photos/1920/1080')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    }}>
      {/* Subtle grid pattern */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: `linear-gradient(var(--white) 1px, transparent 1px), linear-gradient(90deg, var(--white) 1px, transparent 1px)`, backgroundSize: "60px 60px", pointerEvents: "none" }} />

      <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        {/* Alert */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "9px 22px", borderRadius: 40,
          background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
          marginBottom: 36, animation: "fadeUp 0.4s ease",
          backdropFilter: "blur(4px)",
        }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#FF4D4D", animation: "pulse 2s infinite" }} />
          <span style={{ color: "var(--white)", fontSize: 12.5, fontWeight: 600, letterSpacing: 0.2 }}>Cada día que no tomas acción en tu crédito pierdes dinero.</span>
        </div>

        <h1 style={{
          fontFamily: "var(--font-merriweather)",
          fontSize: "clamp(32px, 5.2vw, 60px)", fontWeight: 900,
          lineHeight: 1.15, margin: "0 0 28px", color: "var(--white)",
          animation: "fadeUp 0.6s ease",
          textShadow: "0 2px 10px rgba(0,0,0,0.3)",
        }}>
          La mayoría paga el{" "}
          <span style={{ position: "relative", display: "inline-block" }}>
            <span style={{ color: "var(--yellow)" }}>doble</span>
            <svg style={{ position: "absolute", bottom: -5, left: -2, width: "104%", height: 12 }} viewBox="0 0 200 12" preserveAspectRatio="none">
              <path d="M2 8 Q50 2 100 7 Q150 12 198 5" fill="none" stroke="var(--white)" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
            </svg>
          </span>{" "}
          en su crédito de vivienda…<br />tú puedes evitarlo
        </h1>

        <p style={{
          fontSize: "clamp(15px, 2.2vw, 20px)", color: "rgba(255,255,255,0.9)", lineHeight: 1.75,
          maxWidth: 580, margin: "0 auto 40px", animation: "fadeUp 0.8s ease",
          textShadow: "0 1px 4px rgba(0,0,0,0.2)",
        }}>
          Te representamos ante tu entidad financiera para hacer valer{" "}
          <strong style={{ color: "var(--yellow)", fontWeight: 800 }}>la Ley 546 de 1999</strong> y reestructurar tu crédito hipotecario.
          Paga tu casa en años, no en décadas.
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", animation: "fadeUp 1s ease" }}>
          <a href="/formulario" style={{
            display: "inline-block", padding: "17px 42px", borderRadius: 16, border: "none", cursor: "pointer",
            background: "#e4ae00",
            color: "#112166", fontSize: 16, fontWeight: 800, letterSpacing: 0.3, textDecoration: "none",
            boxShadow: `0 8px 28px rgba(228, 174, 0, 0.35), inset 0 1px 0 rgba(255,255,255,0.3)`,
            transition: "all 0.3s cubic-bezier(.22,1,.36,1)",
          }}
          >Quiero mi análisis gratis →</a>
          <button onClick={onSimClick} style={{
            padding: "17px 38px", borderRadius: 16, cursor: "pointer",
            background: "rgba(255,255,255,0.1)", border: `2px solid var(--white)`,
            color: "var(--white)", fontSize: 16, fontWeight: 700, letterSpacing: 0.3,
            backdropFilter: "blur(8px)", transition: "all 0.25s ease",
          }}
          >Ver cuánto ahorro</button>
        </div>

        {/* Social proof */}
        <div style={{ marginTop: 52, display: "flex", alignItems: "center", justifyContent: "center", gap: 14, animation: "fadeUp 1.2s ease" }}>
          <div style={{ display: "flex" }}>
            {["C", "A", "D", "M", "R"].map((l, i) => (
              <div key={i} style={{
                width: 36, height: 36, borderRadius: "50%",
                background: `hsl(${210 + i * 22}, ${45 + i * 5}%, ${32 + i * 7}%)`,
                border: `2.5px solid rgba(255,255,255,0.2)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginLeft: i > 0 ? -10 : 0, fontSize: 12, fontWeight: 700, color: "white",
                boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
              }}>{l}</div>
            ))}
          </div>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, margin: 0, fontWeight: 500 }}>
            <strong style={{ color: "var(--white)" }}>+320 familias</strong> ya ahorraron millones
          </p>
        </div>
      </div>
    </section>
  );
}
