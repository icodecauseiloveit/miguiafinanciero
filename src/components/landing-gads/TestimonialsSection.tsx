"use client";
import { FadeIn } from "../ui/FadeIn";
import { Section, SectionHeading, SectionLabel } from "../ui/Section";
import { CTAButton } from "../ui/CTAButton";

export function TestimonialsSection({ id }: { id?: string }) {
  const testimonios = [
    { nombre: "Carolina M.", ciudad: "Bogotá", ahorro: "$92M", plazo: "18 años menos", texto: "Tenía un crédito de $210M en UVR y sentía que nunca iba a terminar. Mi Guía Financiero me ayudó a reestructurar y ahora termino en 12 años, no en 30." },
    { nombre: "Andrés P.", ciudad: "Medellín", ahorro: "$67M", plazo: "14 años menos", texto: "El banco me decía que no se podía. Mi Guía Financiero me mostró el Artículo 17 de la Ley 546 y ahora mis abonos van directo a capital." },
    { nombre: "Diana y Jorge R.", ciudad: "Cali", ahorro: "$115M", plazo: "16 años menos", texto: "Pagamos cuota hace 5 años y debíamos MÁS de lo que nos prestaron. Con la reestructuración finalmente avanzamos." },
  ];

  return (
    <Section id={id} bg="linear-gradient(180deg, var(--cream), var(--cream-deep), var(--cream))">
      <FadeIn>
        <SectionLabel text="Historias reales" color="var(--green)" />
        <SectionHeading>Casos de estudio y <span style={{ color: "var(--green)" }}>experiencias</span></SectionHeading>
        <div style={{ height: 20 }} />
      </FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
        {testimonios.map((t, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div 
              className="glass-card"
              style={{
              padding: 32, borderRadius: 24, height: "100%",
              display: "flex", flexDirection: "column",
              transition: "all 0.3s ease",
            }}>
              {/* Review Header */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: `hsl(${200 + i * 40}, 60%, 45%)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "white", fontSize: 18, fontWeight: 700
                }}>
                  {t.nombre.charAt(0)}
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <p style={{ color: "var(--blue)", fontWeight: 800, fontSize: 15, margin: 0 }}>{t.nombre}</p>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#25D366"/>
                    </svg>
                  </div>
                  <p style={{ color: "var(--gray-light)", fontSize: 12, margin: "2px 0 0" }}>{t.ciudad} • Cliente Verificado</p>
                </div>
              </div>

              {/* Stars */}
              <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#F2B705" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p style={{ color: "var(--gray)", fontSize: 14, lineHeight: 1.7, margin: "0 0 24px", flex: 1 }}>{t.texto}</p>

              {/* Results Tag */}
              <div style={{
                background: "var(--cream)", padding: "12px 16px", borderRadius: 12,
                border: "1px solid var(--yellow-soft)",
                display: "flex", justifyContent: "space-between", alignItems: "center"
              }}>
                <span style={{ color: "var(--blue-mid)", fontSize: 12, fontWeight: 700 }}>Ahorro logrado:</span>
                <div style={{ textAlign: "right" }}>
                  <span style={{ color: "var(--green)", fontWeight: 900, fontSize: 16, display: "block" }}>{t.ahorro}</span>
                  <span style={{ color: "var(--gray-light)", fontSize: 11 }}>({t.plazo})</span>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
      <div style={{ maxWidth: 700, margin: "32px auto 0", textAlign: "center", padding: "0 20px" }}>
        <p style={{ fontSize: 11, color: "var(--gray)", lineHeight: 1.5, opacity: 0.8 }}>
          * Nota legal: Los ejemplos de ahorro y reducción de plazo presentados corresponden a casos reales de clientes. Sin embargo, los resultados individuales pueden variar dependiendo de factores como el saldo de la deuda, la tasa de interés actual, el plazo remanente y las políticas específicas de la entidad financiera.
        </p>
      </div>
      <CTAButton />
    </Section>
  );
}
