import Link from "next/link";

export default function TerminosPage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--cream)", padding: "120px 24px 80px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", background: "var(--white)", padding: "60px 50px", borderRadius: 32, boxShadow: "0 20px 60px rgba(0,0,0,0.05)" }}>
        <Link href="/" style={{ color: "var(--blue)", fontWeight: 700, display: "flex", alignItems: "center", gap: 8, marginBottom: 40, fontSize: 14, textDecoration: "none" }}>
          ← Volver al inicio
        </Link>

        <div style={{ marginBottom: 40 }}>
          <h1 style={{ fontFamily: "var(--font-merriweather)", color: "var(--blue)", fontSize: "clamp(24px, 3.5vw, 34px)", fontWeight: 900, marginBottom: 12, lineHeight: 1.2 }}>
            Términos y Condiciones
          </h1>
          <p style={{ color: "var(--gray)", fontSize: 15, lineHeight: 1.7 }}>
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div style={{ color: "var(--gray)", fontSize: 15, lineHeight: 1.8 }}>
          <h2 style={{ color: "var(--blue)", fontSize: 20, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>1. Objeto del Servicio</h2>
          <p style={{ marginBottom: 16 }}>
            Mi Guía Financiero provee servicios de asesoría y acompañamiento para la reestructuración y optimización de créditos hipotecarios y leasing habitacional en Colombia, amparados en la Ley 546 de 1999.
          </p>

          <h2 style={{ color: "var(--blue)", fontSize: 20, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>2. Análisis Inicial y Proyección</h2>
          <p style={{ marginBottom: 16 }}>
            El análisis preliminar y la proyección de ahorro son servicios de carácter informativo y 100% gratuitos. Los cálculos se basan en estimaciones matemáticas y no constituyen una obligación contractual hasta la firma de un mandato o poder de representación.
          </p>

          <h2 style={{ color: "var(--blue)", fontSize: 20, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>3. Honorarios por Éxito</h2>
          <p style={{ marginBottom: 16 }}>
            Nuestros honorarios de gestión se causan única y exclusivamente cuando la entidad financiera (banco) emite confirmación escrita y formal de la aplicación de los beneficios y reducción de plazo y/o intereses. En ningún caso solicitamos anticipos dinerarios para la radicación inicial del trámite.
          </p>

          <h2 style={{ color: "var(--blue)", fontSize: 20, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>4. Responsabilidades del Usuario</h2>
          <p style={{ marginBottom: 16 }}>
            El usuario se compromete a entregar información veraz y extractos actualizados de su obligación financiera para que podamos realizar un cálculo preciso. La ocultación de información sobre morosidad o embargos puede imposibilitar la gestión ante el banco.
          </p>

          <h2 style={{ color: "var(--blue)", fontSize: 20, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>5. Ley Aplicable y Jurisdicción</h2>
          <p style={{ marginBottom: 16 }}>
            Estos términos se rigen por las leyes de la República de Colombia. Cualquier controversia será resuelta ante los jueces o centros de conciliación de la ciudad de Cartagena, Colombia.
          </p>

          <h2 style={{ color: "var(--blue)", fontSize: 20, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>6. Contacto</h2>
          <p style={{ marginBottom: 16 }}>
            Para consultas legales o relacionadas con estos términos, contáctenos en: <strong>gary@miguiafinanciero.com</strong>
          </p>
        </div>
      </div>
    </main>
  );
}
