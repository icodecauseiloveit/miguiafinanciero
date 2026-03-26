"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Flame, CheckCheck } from "lucide-react";
import Image from "next/image";

const LETTERS = ["A", "B", "C", "D", "E", "F"];

// ─── Scoring map ────────────────────────────────────────────────────────────
const SCORES: Record<string, Record<string, number>> = {
  tipo_credito: {
    "Crédito en UVR": 4,
    "Crédito en pesos (tasa fija)": 3,
    "No estoy seguro": 2,
    "Aún no tengo crédito, estoy por tomarlo": 0,
  },
  monto_credito: {
    "Menos de $100 millones": 1,
    "Entre $100 y $200 millones": 3,
    "Entre $200 y $350 millones": 4,
    "Más de $350 millones": 5,
    "No recuerdo el monto exacto": 2,
  },
  plazo_credito: {
    "Entre 5 y 15 años": 2,
    "Entre 15 y 20 años": 3,
    "Entre 20 y 30 años": 5,
    "No estoy seguro": 2,
  },
  cuota_mensual: {
    "Menos de $800.000": 1,
    "Entre $800.000 y $1.500.000": 3,
    "Entre $1.500.000 y $2.500.000": 4,
    "Más de $2.500.000": 5,
    "No recuerdo con exactitud": 2,
  },
  dolor_extracto: {
    "Sí, y me genera mucha frustración": 5,
    "Sí, lo he notado pero no le he puesto mucha atención": 3,
    "No, nunca he revisado con detalle": 1,
    "No, mi deuda sí ha bajado de forma normal": 0,
  },
  conoce_ley546: {
    "No tenía ni idea, me interesa mucho saber más": 4,
    "Sabía algo pero no conozco los detalles": 3,
    "Sí, ya lo sabía": 1,
    "Ya intenté hacerlo pero el banco me puso trabas": 5,
  },
  preocupacion_deuda: {
    "Es una de mis mayores preocupaciones. Pienso en eso constantemente.": 5,
    "Me preocupa, especialmente cuando llega el extracto o escucho noticias de inflación.": 4,
    "Me preocupa un poco pero no es algo que me quite el sueño.": 2,
    "No me preocupa, lo tengo bajo control.": 0,
  },
  disposicion_abono: {
    "Sí, definitivamente. Prefiero pagar más ahora y liberar mi casa mucho antes.": 5,
    "Probablemente sí, pero necesitaría ver los números exactos de mi caso.": 4,
    "Me interesa, pero no sé si mi presupuesto me lo permite en este momento.": 2,
    "No, prefiero seguir pagando la cuota mínima que tengo.": 0,
  },
  urgencia: {
    "Lo antes posible, cada día que pasa siento que estoy perdiendo dinero.": 5,
    "En los próximos 1 a 3 meses.": 3,
    "En algún momento este año, no tengo prisa.": 1,
    "Solo estoy explorando opciones por ahora.": 0,
  },
};

// Multi-select scoring (4.3)
const OBJECION_SCORES: Record<string, number> = {
  "No sabía que existían opciones para mejorar mi situación": 2,
  "No entiendo bien cómo funciona mi crédito ni la ley": 2,
  "Intenté hablar con el banco pero no me dieron soluciones": 3,
  "No confío en servicios de asesoría financiera": 1,
  "No tengo tiempo para hacer los trámites": 2,
  "Creía que tenía que esperar a tener mucho dinero ahorrado para hacer un abono grande": 2,
};

type Step = {
  id: number;
  type: "radio" | "multiselect" | "contact";
  section: string;
  key: string;
  question: string;
  description?: string;
  options?: string[];
};

const steps: Step[] = [
  {
    id: 1,
    type: "radio",
    section: "Háblanos de tu crédito",
    key: "tipo_credito",
    question: "¿Qué tipo de crédito hipotecario tienes?",
    options: [
      "Crédito en UVR",
      "Crédito en pesos (tasa fija)",
      "No estoy seguro",
      "Aún no tengo crédito, estoy por tomarlo",
    ],
  },
  {
    id: 2,
    type: "radio",
    section: "Háblanos de tu crédito",
    key: "monto_credito",
    question: "¿Aproximadamente cuánto fue el monto de tu crédito cuando lo tomaste?",
    options: [
      "Menos de $100 millones",
      "Entre $100 y $200 millones",
      "Entre $200 y $350 millones",
      "Más de $350 millones",
      "No recuerdo el monto exacto",
    ],
  },
  {
    id: 3,
    type: "radio",
    section: "Háblanos de tu crédito",
    key: "plazo_credito",
    question: "¿Cuántos años de plazo tiene tu crédito?",
    options: [
      "Entre 5 y 15 años",
      "Entre 15 y 20 años",
      "Entre 20 y 30 años",
      "No estoy seguro",
    ],
  },
  {
    id: 4,
    type: "radio",
    section: "Háblanos de tu crédito",
    key: "cuota_mensual",
    question: "¿Cuánto pagas de cuota mensual actualmente?",
    options: [
      "Menos de $800.000",
      "Entre $800.000 y $1.500.000",
      "Entre $1.500.000 y $2.500.000",
      "Más de $2.500.000",
      "No recuerdo con exactitud",
    ],
  },
  {
    id: 5,
    type: "radio",
    section: "¿Cómo te sientes con tu deuda?",
    key: "dolor_extracto",
    question: "¿Has revisado tu extracto y sentido que, a pesar de pagar todos los meses, tu deuda casi no baja o incluso ha subido?",
    options: [
      "Sí, y me genera mucha frustración",
      "Sí, lo he notado pero no le he puesto mucha atención",
      "No, nunca he revisado con detalle",
      "No, mi deuda sí ha bajado de forma normal",
    ],
  },
  {
    id: 6,
    type: "radio",
    section: "¿Cómo te sientes con tu deuda?",
    key: "conoce_ley546",
    question: "¿Sabías que la Ley 546 de 1999 te da el derecho a hacer abonos a capital sin penalidad, y que tú eliges si eso reduce tu cuota o tu plazo?",
    options: [
      "No tenía ni idea, me interesa mucho saber más",
      "Sabía algo pero no conozco los detalles",
      "Sí, ya lo sabía",
      "Ya intenté hacerlo pero el banco me puso trabas",
    ],
  },
  {
    id: 7,
    type: "radio",
    section: "¿Cómo te sientes con tu deuda?",
    key: "preocupacion_deuda",
    question: "¿Qué tanto te preocupa la deuda de tu casa en tu día a día?",
    options: [
      "Es una de mis mayores preocupaciones. Pienso en eso constantemente.",
      "Me preocupa, especialmente cuando llega el extracto o escucho noticias de inflación.",
      "Me preocupa un poco pero no es algo que me quite el sueño.",
      "No me preocupa, lo tengo bajo control.",
    ],
  },
  {
    id: 8,
    type: "radio",
    section: "¿Estás listo para cambiar tu situación?",
    key: "disposicion_abono",
    question: "Si te mostráramos con números exactos que aumentando tu cuota entre un 40% y 50% podrías ahorrarte decenas de millones en intereses y reducir tu crédito en 10 a 18 años, ¿estarías dispuesto a hacerlo?",
    description: "Todo el extra va directo a capital, no a intereses.",
    options: [
      "Sí, definitivamente. Prefiero pagar más ahora y liberar mi casa mucho antes.",
      "Probablemente sí, pero necesitaría ver los números exactos de mi caso.",
      "Me interesa, pero no sé si mi presupuesto me lo permite en este momento.",
      "No, prefiero seguir pagando la cuota mínima que tengo.",
    ],
  },
  {
    id: 9,
    type: "radio",
    section: "¿Estás listo para cambiar tu situación?",
    key: "urgencia",
    question: "¿Qué tan pronto te gustaría empezar a reducir tu deuda hipotecaria?",
    options: [
      "Lo antes posible, cada día que pasa siento que estoy perdiendo dinero.",
      "En los próximos 1 a 3 meses.",
      "En algún momento este año, no tengo prisa.",
      "Solo estoy explorando opciones por ahora.",
    ],
  },
  {
    id: 10,
    type: "multiselect",
    section: "¿Estás listo para cambiar tu situación?",
    key: "objeciones",
    question: "¿Qué te ha impedido hasta ahora tomar acción sobre tu crédito hipotecario?",
    description: "Puedes seleccionar varias opciones.",
    options: [
      "No sabía que existían opciones para mejorar mi situación",
      "No entiendo bien cómo funciona mi crédito ni la ley",
      "Intenté hablar con el banco pero no me dieron soluciones",
      "No confío en servicios de asesoría financiera",
      "No tengo tiempo para hacer los trámites",
      "Creía que tenía que esperar a tener mucho dinero ahorrado para hacer un abono grande",
    ],
  },
  {
    id: 11,
    type: "contact",
    section: "Cuéntanos quién eres",
    key: "contacto",
    question: "Déjanos tus datos para enviarte el análisis personalizado",
    description: "En menos de 24 horas recibirás tu proyección de ahorro por WhatsApp.",
  },
];

const TOTAL = steps.length;

function calcScore(answers: Record<string, string | string[]>): number {
  let score = 0;
  for (const key of Object.keys(SCORES)) {
    const val = answers[key] as string;
    if (val && SCORES[key][val] !== undefined) score += SCORES[key][val];
  }
  const obs = answers["objeciones"] as string[] | undefined;
  if (obs) {
    for (const o of obs) {
      score += OBJECION_SCORES[o] ?? 0;
    }
  }
  return score;
}

function getTemperature(score: number): "CALIENTE" | "TIBIO" | "FRIO" {
  if (score >= 28) return "CALIENTE";
  if (score >= 16) return "TIBIO";
  return "FRIO";
}

export default function FormularioMGF() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [multiSelected, setMultiSelected] = useState<string[]>([]);
  const [contactData, setContactData] = useState({ nombre: "", whatsapp: "", email: "" });
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const goNext = () => {
    if (currentStep < TOTAL - 1) {
      setDirection(1);
      setCurrentStep((s) => s + 1);
    } else {
      const finalAnswers = { ...answers, objeciones: multiSelected, ...contactData };
      const finalScore = calcScore(finalAnswers);
      setScore(finalScore);
      setIsCompleted(true);
    }
  };

  const goPrev = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep((s) => s - 1);
    }
  };

  const handleRadio = (option: string, key: string) => {
    setAnswers((prev) => ({ ...prev, [key]: option }));
    setTimeout(goNext, 320);
  };

  const toggleMulti = (option: string) => {
    setMultiSelected((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  };

  const handleWhatsApp = () => {
    const phone = "573025261619";
    const temp = getTemperature(score);
    const nombre = contactData.nombre || "Prospecto";
    let msg = `Hola MiGuíaFinanciero, soy *${nombre}*. Completé el formulario de análisis hipotecario.\n\n`;
    msg += `📋 *Mis datos:*\n`;
    msg += `📱 WhatsApp: ${contactData.whatsapp || "—"}\n`;
    msg += `📧 Email: ${contactData.email || "—"}\n\n`;
    msg += `🏦 *Mi crédito:*\n`;
    msg += `Tipo: ${answers["tipo_credito"] || "—"}\n`;
    msg += `Monto: ${answers["monto_credito"] || "—"}\n`;
    msg += `Plazo: ${answers["plazo_credito"] || "—"}\n`;
    msg += `Cuota: ${answers["cuota_mensual"] || "—"}\n\n`;
    msg += `💬 *Mi situación:*\n`;
    msg += `Extracto: ${answers["dolor_extracto"] || "—"}\n`;
    msg += `Ley 546: ${answers["conoce_ley546"] || "—"}\n`;
    msg += `Preocupación: ${answers["preocupacion_deuda"] || "—"}\n\n`;
    msg += `🎯 *Disposición:*\n`;
    msg += `Abono: ${answers["disposicion_abono"] || "—"}\n`;
    msg += `Urgencia: ${answers["urgencia"] || "—"}\n`;
    if (multiSelected.length) msg += `\n⚠️ Objeciones: ${multiSelected.join(", ")}\n`;
    msg += `\n🌡️ Temperatura: ${temp} (${score} pts)`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  // ─── Completion Screen ───────────────────────────────────────────────────
  if (isCompleted) {
    const temp = getTemperature(score);
    const nombre = contactData.nombre || "";
    return (
      <div style={{ minHeight: "100vh", background: "#0d1117", display: "flex", alignItems: "center", justifyContent: "center", padding: 32, fontFamily: "var(--font-dm-sans), sans-serif" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ maxWidth: 560, width: "100%", textAlign: "center" }}
        >
          <div style={{ marginBottom: 32, display: "flex", justifyContent: "center" }}>
            {temp === "CALIENTE" ? (
              <div style={{ background: "rgba(249,115,22,0.15)", borderRadius: "50%", padding: 24 }}>
                <Flame size={56} color="#f97316" />
              </div>
            ) : (
              <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: "50%", padding: 24 }}>
                <CheckCheck size={56} color="white" />
              </div>
            )}
          </div>

          <h2 style={{ color: "white", fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 900, marginBottom: 16, lineHeight: 1.2 }}>
            {nombre ? `¡Gracias, ${nombre}!` : "¡Gracias por completar el formulario!"}
          </h2>

          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 18, marginBottom: 32, lineHeight: 1.6 }}>
            Ya tenemos todo lo que necesitamos para preparar tu análisis personalizado.{" "}
            <strong style={{ color: "rgba(255,255,255,0.85)" }}>En menos de 24 horas recibirás por WhatsApp:</strong>
          </p>

          <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "24px 28px", marginBottom: 32, textAlign: "left" }}>
            {[
              "→ Una proyección exacta de cuánto puedes ahorrarte en intereses.",
              "→ Cuántos años puedes reducir de tu crédito.",
              "→ Un plan de reestructuración basado en la Ley 546 de 1999 adaptado a tu caso.",
            ].map((item, i) => (
              <p key={i} style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, lineHeight: 1.6, marginBottom: i < 2 ? 12 : 0 }}>{item}</p>
            ))}
          </div>

          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, marginBottom: 28 }}>
            Todo esto sin costo y sin compromiso. <strong style={{ color: "rgba(255,255,255,0.6)" }}>Solo cobramos si tu banco confirma el beneficio aplicado.</strong>
          </p>

          <button
            onClick={handleWhatsApp}
            style={{
              width: "100%", background: "#25D366", color: "#0d1117", fontWeight: 800,
              fontSize: 18, padding: "18px 24px", borderRadius: 16, border: "none",
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
              transition: "all 0.25s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#1EBE59"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#25D366"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Contactar por WhatsApp <Send size={20} />
          </button>

          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 12, marginTop: 16 }}>
            Se abrirá una conversación de WhatsApp con tu información.
          </p>
        </motion.div>
      </div>
    );
  }

  const step = steps[currentStep];
  const progress = ((currentStep + 1) / TOTAL) * 100;

  const variants = {
    enter: (d: number) => ({ opacity: 0, y: d > 0 ? 40 : -40 }),
    center: { opacity: 1, y: 0 },
    exit: (d: number) => ({ opacity: 0, y: d > 0 ? -40 : 40 }),
  };

  const contactValid = contactData.nombre.trim().length > 1 && contactData.whatsapp.trim().length > 7;

  return (
    <div style={{ minHeight: "100vh", background: "#0d1117", display: "flex", flexDirection: "column", fontFamily: "var(--font-dm-sans), sans-serif" }}>
      {/* Progress Bar */}
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: 3, background: "rgba(255,255,255,0.08)", zIndex: 60 }}>
        <motion.div
          style={{ height: "100%", background: "linear-gradient(90deg, #1E3A5F, #F2B705)", originX: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Logo Header */}
      <div style={{ position: "fixed", top: 6, left: 0, width: "100%", zIndex: 50, padding: "8px 24px", display: "flex", justifyContent: "center" }}>
        <a href="/">
          <Image src="/logo-mgf-dark.png" alt="Mi Guía Financiero" width={200} height={64} style={{ objectFit: "contain" }} />
        </a>
      </div>

      {/* Section Label */}
      <div style={{ position: "fixed", top: 14, right: 24, zIndex: 50 }}>
        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>
          {step.section}
        </span>
      </div>

      {/* Main Content */}
      <div style={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 24px 40px" }}>
        <div style={{ width: "100%", maxWidth: 680 }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* ── RADIO ── */}
              {step.type === "radio" && (
                <div>
                  <div style={{ marginBottom: 28 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 12 }}>
                      <span style={{ flexShrink: 0, marginTop: 4, background: "rgba(255,255,255,0.12)", color: "white", fontSize: 13, fontWeight: 700, borderRadius: 6, padding: "2px 8px" }}>
                        {currentStep + 1}
                      </span>
                      <h2 style={{ color: "white", fontSize: "clamp(22px, 3.2vw, 34px)", fontWeight: 800, lineHeight: 1.3 }}>
                        {step.question}
                      </h2>
                    </div>
                    {step.description && (
                      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 15, marginLeft: 40 }}>{step.description}</p>
                    )}
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 12, marginLeft: 40 }}>
                    {step.options?.map((option, i) => (
                      <button
                        key={option}
                        onClick={() => handleRadio(option, step.key)}
                        style={{
                          textAlign: "left", display: "flex", alignItems: "center", gap: 16,
                          padding: "16px 20px", borderRadius: 16, border: "2px solid",
                          borderColor: answers[step.key] === option ? "rgba(242,183,5,0.7)" : "rgba(255,255,255,0.12)",
                          background: answers[step.key] === option ? "rgba(242,183,5,0.08)" : "rgba(255,255,255,0.03)",
                          color: answers[step.key] === option ? "white" : "rgba(255,255,255,0.7)",
                          fontSize: 16, cursor: "pointer", transition: "all 0.2s ease",
                        }}
                        onMouseEnter={e => { if (answers[step.key] !== option) { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; } }}
                        onMouseLeave={e => { if (answers[step.key] !== option) { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; } }}
                      >
                        <span style={{
                          flexShrink: 0, width: 32, height: 32, borderRadius: "50%",
                          border: "1.5px solid rgba(255,255,255,0.25)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.45)",
                        }}>
                          {LETTERS[i]}
                        </span>
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ── MULTI-SELECT ── */}
              {step.type === "multiselect" && (
                <div>
                  <div style={{ marginBottom: 28 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 12 }}>
                      <span style={{ flexShrink: 0, marginTop: 4, background: "rgba(255,255,255,0.12)", color: "white", fontSize: 13, fontWeight: 700, borderRadius: 6, padding: "2px 8px" }}>
                        {currentStep + 1}
                      </span>
                      <h2 style={{ color: "white", fontSize: "clamp(22px, 3.2vw, 34px)", fontWeight: 800, lineHeight: 1.3 }}>
                        {step.question}
                      </h2>
                    </div>
                    {step.description && (
                      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 15, marginLeft: 40 }}>{step.description}</p>
                    )}
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 10, marginLeft: 40, marginBottom: 28 }}>
                    {step.options?.map((option, i) => {
                      const selected = multiSelected.includes(option);
                      return (
                        <button
                          key={option}
                          onClick={() => toggleMulti(option)}
                          style={{
                            textAlign: "left", display: "flex", alignItems: "center", gap: 16,
                            padding: "14px 20px", borderRadius: 14, border: "2px solid",
                            borderColor: selected ? "rgba(37,211,102,0.6)" : "rgba(255,255,255,0.12)",
                            background: selected ? "rgba(37,211,102,0.07)" : "rgba(255,255,255,0.03)",
                            color: selected ? "white" : "rgba(255,255,255,0.65)",
                            fontSize: 15, cursor: "pointer", transition: "all 0.2s ease",
                          }}
                        >
                          <span style={{
                            flexShrink: 0, width: 28, height: 28, borderRadius: 6,
                            border: `2px solid ${selected ? "rgba(37,211,102,0.6)" : "rgba(255,255,255,0.2)"}`,
                            background: selected ? "rgba(37,211,102,0.2)" : "transparent",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.4)",
                          }}>
                            {selected ? "✓" : LETTERS[i]}
                          </span>
                          {option}
                        </button>
                      );
                    })}
                  </div>

                  <div style={{ marginLeft: 40 }}>
                    <button
                      onClick={goNext}
                      style={{
                        background: "#F2B705", color: "#0d1117", border: "none",
                        borderRadius: 14, padding: "16px 36px", fontSize: 16, fontWeight: 800,
                        cursor: "pointer", transition: "all 0.25s ease",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}
                    >
                      {multiSelected.length === 0 ? "Ninguna, continuar →" : `Continuar (${multiSelected.length} seleccionadas) →`}
                    </button>
                  </div>
                </div>
              )}

              {/* ── FINAL CONTACT ── */}
              {step.type === "contact" && (
                <div>
                  <div style={{ marginBottom: 28 }}>
                    <div style={{ display: "inline-block", background: "rgba(242,183,5,0.12)", border: "1px solid rgba(242,183,5,0.2)", borderRadius: 8, padding: "4px 12px", marginBottom: 16 }}>
                      <span style={{ color: "#F2B705", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>ÚLTIMO PASO</span>
                    </div>
                    <h2 style={{ color: "white", fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 900, lineHeight: 1.25, marginBottom: 12 }}>
                      {step.question}
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 15 }}>{step.description}</p>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 32 }}>
                    {[
                      { label: "NOMBRE COMPLETO", key: "nombre", type: "text", placeholder: "Tu nombre completo" },
                      { label: "NÚMERO DE WHATSAPP", key: "whatsapp", type: "tel", placeholder: "Ej: 3001234567" },
                      { label: "CORREO ELECTRÓNICO", key: "email", type: "email", placeholder: "tu@correo.com" },
                    ].map((field) => (
                      <div key={field.key}>
                        <label style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          value={contactData[field.key as keyof typeof contactData]}
                          onChange={(e) => setContactData((prev) => ({ ...prev, [field.key]: e.target.value }))}
                          style={{
                            width: "100%", background: "transparent", border: "none",
                            borderBottom: "2px solid rgba(255,255,255,0.2)", color: "white",
                            fontSize: 20, padding: "8px 0", outline: "none",
                            transition: "border-color 0.2s",
                          }}
                          onFocus={e => { e.target.style.borderBottomColor = "rgba(242,183,5,0.7)"; }}
                          onBlur={e => { e.target.style.borderBottomColor = "rgba(255,255,255,0.2)"; }}
                        />
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={goNext}
                    disabled={!contactValid}
                    style={{
                      background: contactValid ? "#F2B705" : "rgba(255,255,255,0.1)",
                      color: contactValid ? "#0d1117" : "rgba(255,255,255,0.3)",
                      border: "none", borderRadius: 14, padding: "18px 40px",
                      fontSize: 17, fontWeight: 800, cursor: contactValid ? "pointer" : "not-allowed",
                      transition: "all 0.25s ease", display: "flex", alignItems: "center", gap: 10,
                    }}
                  >
                    Enviar y recibir mi análisis <Send size={18} />
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div style={{ padding: "16px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 680, margin: "0 auto", width: "100%" }}>
        <button
          onClick={goPrev}
          style={{
            color: "rgba(255,255,255,0.3)", background: "none", border: "none",
            fontSize: 14, fontWeight: 600, cursor: currentStep === 0 ? "default" : "pointer",
            opacity: currentStep === 0 ? 0 : 1, transition: "all 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
          onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.3)"; }}
        >
          ↑ Anterior
        </button>
        <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>
          {currentStep + 1} / {TOTAL}
        </span>
        <span style={{ width: 80 }} />
      </div>
    </div>
  );
}
