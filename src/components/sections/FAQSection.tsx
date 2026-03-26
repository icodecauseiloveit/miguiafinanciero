"use client";
import { useState } from "react";
import { FadeIn } from "../ui/FadeIn";
import { Section, SectionHeading, SectionLabel } from "../ui/Section";

export function FAQSection({ id }: { id?: string }) {
  const faqs = [
    { q: "¿Cómo funciona exactamente el servicio?", a: "Te representamos ante tu entidad financiera para hacer valer los beneficios de la Ley 546 de 1999. Analizamos tu crédito, calculamos la reestructuración óptima, y gestionamos todo el proceso con el banco. Tú solo necesitas hacer un aumento desde el 50% de tu cuota actual, que se destina íntegramente a reducir el capital." },
    { q: "¿Esto es legal? ¿El banco puede negarse?", a: "Es 100% legal. La Ley 546 de 1999 (Artículo 17, numeral 8) establece que todo crédito de vivienda permite prepago total o parcial sin penalidad alguna, y el deudor elige si reduce cuota o plazo. El Artículo 20 da derecho a reestructuración. El banco está obligado por ley." },
    { q: "¿Cuánto me puedo ahorrar realmente?", a: "Depende del monto, la tasa y el plazo de tu crédito. En promedio, nuestros clientes logran ahorros entre el 40% y 60% del total de intereses, y reduccin el plazo entre 10 y 18 años. Usa nuestro simulador para una estimación, o solicita tu análisis personalizado gratuito." },
    { q: "¿Funciona para créditos en UVR y en pesos?", a: "Sí. La Ley 546 aplica para todos los créditos de vivienda en Colombia, tanto en UVR como en tasa fija en pesos. Los créditos en UVR suelen tener un potencial de ahorro mayor." },
    { q: "¿Cuánto cobran por el servicio?", a: "Primero hacemos un análisis gratuito donde ves exactamente cuánto puedes ahorrarte. Solo si decides avanzar, cobramos un porcentaje del ahorro logrado. Pero lo más importante: no pagas nada hasta que recibas la confirmación oficial de tu banco de que el beneficio ha sido efectivamente aplicado a tu crédito. Si el banco no lo aplica, no nos debes un solo peso. Cero riesgo para ti." },
    { q: "¿Y si el banco no aplica el beneficio?", a: "Si por cualquier razón el banco no aplica la reestructuración, no nos pagas absolutamente nada. Nuestros honorarios están 100% condicionados a que tú recibas la confirmación escrita de tu entidad financiera de que el beneficio fue aplicado exitosamente. No hay letra pequeña, no hay cobros ocultos, no hay anticipos. Asumimos todo el riesgo nosotros." },
    { q: "¿Yo no puedo hacer esto solo?", a: "Puedes, igual que puedes hacer tu propia declaración de renta. La diferencia está en la experticia. Un abono a capital mal estructurado puede ahorrarte $5 millones. Uno optimizado según la Ley 546, $50 millones o más. Además, con nosotros no arriesgas nada: solo pagas cuando el resultado está confirmado por tu banco." },
  ];

  return (
    <Section id={id} bg="var(--off-white)">
      <FadeIn>
        <SectionLabel text="Preguntas frecuentes" color="var(--gray)" />
        <SectionHeading>Todo lo que necesitas saber</SectionHeading>
        <div style={{ height: 16 }} />
      </FadeIn>
      <FadeIn delay={0.1}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <FAQList faqs={faqs} />
        </div>
      </FadeIn>
    </Section>
  );
}

function FAQList({ faqs }: { faqs: { q: string, a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{
            marginBottom: 8, borderRadius: 18, overflow: "hidden",
            border: `1.5px solid ${isOpen ? "var(--yellow)" : "rgba(30,58,95,0.08)"}`,
            background: isOpen ? "var(--cream)" : "var(--white)",
            boxShadow: isOpen ? `0 8px 24px var(--yellow-soft)` : "0 1px 4px rgba(30,58,95,0.03)",
            transition: "all 0.35s ease",
          }}>
            <button onClick={() => setOpen(isOpen ? null : i)} style={{
              width: "100%", padding: "20px 28px", background: "none", border: "none",
              color: "var(--blue)", fontSize: 15, fontWeight: 700, textAlign: "left", cursor: "pointer",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              fontFamily: "var(--font-dm-sans)",
            }}>
              <span style={{ lineHeight: 1.4, paddingRight: 16 }}>{f.q}</span>
              <div style={{
                width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                background: isOpen ? "var(--yellow)" : "var(--blue-light)",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.3s ease",
              }}>
                <span style={{
                  fontSize: 13, fontWeight: 900, color: isOpen ? "var(--white)" : "var(--blue)",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s",
                  lineHeight: 1,
                }}>▼</span>
              </div>
            </button>
            <div style={{ maxHeight: isOpen ? 300 : 0, overflow: "hidden", transition: "max-height 0.45s ease" }}>
              <p style={{ padding: "0 28px 22px", color: "var(--gray)", fontSize: 14, lineHeight: 1.75, margin: 0 }}>{f.a}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
