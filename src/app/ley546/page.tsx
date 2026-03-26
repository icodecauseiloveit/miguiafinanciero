import Link from "next/link";

export default function Ley546Page() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--cream)", padding: "120px 24px 80px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", background: "var(--white)", padding: "60px 50px", borderRadius: 32, boxShadow: "0 20px 60px rgba(0,0,0,0.05)" }}>
        <Link href="/" style={{ color: "var(--blue)", fontWeight: 700, display: "flex", alignItems: "center", gap: 8, marginBottom: 40, fontSize: 14, textDecoration: "none" }}>
          ← Volver al inicio
        </Link>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>⚖️</div>
          <h1 style={{ fontFamily: "var(--font-merriweather)", color: "var(--blue)", fontSize: "clamp(24px, 3.5vw, 34px)", fontWeight: 900, marginBottom: 12, lineHeight: 1.2 }}>
            Ley 546 de 1999
          </h1>
          <p style={{ color: "var(--gray)", fontSize: 16, lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
            Marco legal que regula el sistema de financiación de vivienda en Colombia y protege los derechos de los deudores de créditos hipotecarios.
          </p>
        </div>

        <div style={{ background: "linear-gradient(135deg, rgba(17,33,102,0.05), rgba(228,174,0,0.08))", borderRadius: 20, padding: "32px", marginBottom: 32 }}>
          <h2 style={{ color: "var(--blue)", fontSize: 18, fontWeight: 800, marginBottom: 16 }}>¿Qué establece esta ley?</h2>
          <ul style={{ color: "var(--gray)", lineHeight: 1.8, fontSize: 15, paddingLeft: 20 }}>
            <li><strong>Reliquidación de créditos</strong> originados en UPAC al sistema UVR.</li>
            <li><strong>Devolución de cobros excesivos</strong> realizados por las entidades financieras.</li>
            <li><strong>Prohibición de la capitalización de intereses</strong> en créditos de vivienda.</li>
            <li><strong>Derecho a la reestructuración</strong> de las condiciones del crédito hipotecario.</li>
            <li><strong>Protección al deudor</strong> frente a prácticas abusivas de las entidades financieras.</li>
            <li><strong>Límites a las tasas de interés</strong> para créditos de vivienda de largo plazo.</li>
          </ul>
        </div>

        <div style={{ background: "var(--cream)", borderRadius: 20, padding: "32px", marginBottom: 40, border: "2px solid var(--yellow)" }}>
          <p style={{ color: "var(--blue)", fontSize: 15, fontWeight: 600, marginBottom: 16, textAlign: "center" }}>
            📄 Consulta el texto completo de la Ley 546 de 1999 en el portal oficial de Función Pública:
          </p>
          <div style={{ textAlign: "center" }}>
            <a
              href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=180"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block", padding: "16px 40px", borderRadius: 16,
                background: "var(--blue)", color: "var(--white)", fontSize: 16, fontWeight: 800,
                textDecoration: "none", boxShadow: "0 8px 24px rgba(30,58,95,0.25)",
                transition: "all 0.3s ease"
              }}
            >
              Ver Ley 546 Completa ↗
            </a>
          </div>
          <p style={{ color: "var(--gray-light)", fontSize: 12, textAlign: "center", marginTop: 12 }}>
            Se abrirá en una nueva pestaña — seguirás en Mi Guía Financiero.
          </p>
        </div>

        <div style={{ textAlign: "center", padding: "24px", background: "linear-gradient(135deg, var(--blue), var(--blue-mid))", borderRadius: 20 }}>
          <p style={{ color: "var(--yellow)", fontWeight: 800, fontSize: 14, marginBottom: 8 }}>¿Tienes un crédito hipotecario?</p>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 14, marginBottom: 16 }}>Podemos analizar tu caso gratis y calcular cuánto puedes ahorrar con la Ley 546.</p>
          <Link href="/" style={{
            display: "inline-block", padding: "14px 32px", borderRadius: 14,
            background: "var(--yellow)", color: "var(--blue)", fontSize: 15, fontWeight: 800,
            textDecoration: "none"
          }}>
            Solicitar Análisis Gratuito
          </Link>
        </div>
      </div>
    </main>
  );
}
