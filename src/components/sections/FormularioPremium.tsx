"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCheck, XCircle } from "lucide-react";
import Image from "next/image";
import { getSourceName } from "@/utils/sources";

const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];

type Step = {
  id: number;
  type: "radio" | "multiselect" | "contact" | "extract";
  section: string;
  key: string;
  question: string;
  description?: string;
  options?: string[];
  fields?: { label: string; key: string; type: string; placeholder: string; autoComplete?: string }[];
};

const steps: Step[] = [
  {
    id: 0,
    type: "radio",
    section: "Análisis Preliminar",
    key: "tiene_credito",
    question: "¿Tiene crédito hipotecario?",
    options: ["Sí, actualmente estoy pagando mi crédito", "No, aún no cuento con crédito hipotecario"],
  },
  {
    id: 1,
    type: "radio",
    section: "Detalles del Crédito",
    key: "banco",
    question: "¿Con qué banco tiene su crédito hipotecario?",
    options: ["Fondo Nacional del Ahorro", "Banco Popular", "Banco La Hipotecaria", "Banco de Occidente", "Banco de Bogotá", "Banco Davivienda", "Banco Colpatria", "Banco Caja Social", "Bancoomeva", "Bancolombia", "Otra entidad"],
  },
  {
    id: 2,
    type: "radio",
    section: "Detalles del Crédito",
    key: "tipo_credito",
    question: "¿Su crédito se encuentra en UVR o en Pesos?",
    options: ["Crédito en UVR", "Crédito en Pesos", "No estoy seguro(a)"],
  },
  {
    id: 3,
    type: "radio",
    section: "Estado de la Obligación",
    key: "al_dia",
    question: "¿Se encuentra al día con los pagos de su obligación?",
    options: ["Sí, estoy al día", "Tengo una o más cuotas atrasadas"],
  },
  {
    id: 4,
    type: "radio",
    section: "Prioridades Financieras",
    key: "desea_ahorrar",
    question: "¿Desea ahorrar años e intereses de su crédito hipotecario?",
    options: ["Sí, es una prioridad para mí", "Me interesa conocer las opciones", "No por el momento"],
  },
  {
    id: 5,
    type: "radio",
    section: "Prioridades Financieras",
    key: "importancia_accion",
    question: "¿Qué tan importante es para usted tomar acción hoy sobre su crédito?",
    options: ["Es urgente, deseo iniciar pronto", "Es importante, pero me gustaría evaluarlo a corto plazo", "Solo estoy explorando opciones"],
  },
  {
    id: 6,
    type: "radio",
    section: "Conocimiento Normativo",
    key: "conoce_ley",
    question: "¿Sabía de la Ley de Vivienda (Ley 546 de 1999)?",
    options: ["Sí la conozco", "Había escuchado al respecto, pero sin detalles", "No, es la primera vez que escucho de ella"],
  },
  {
    id: 7,
    type: "multiselect",
    section: "Beneficios Exclusivos",
    key: "beneficios",
    question: "¿Cuáles de los siguientes beneficios que ofrecemos le atrae más?",
    description: "Puede seleccionar más de una opción.",
    options: ["Terminar su deuda en tiempo récord", "Ahorrar millones en intereses", "Conservar subsidios del Gobierno"],
  },
  {
    id: 8,
    type: "radio",
    section: "Requisito Fundamental",
    key: "disposicion_aumento",
    question: "Para acceder a estos beneficios, debe realizar un aumento en su cuota mensual, el cual protegeremos respaldados en la Ley de Vivienda para que abone exclusivamente a capital. ¿Está dispuesto(a) a realizar un aumento de aproximadamente el 30% respecto al valor actual de su cuota?",
    options: ["Sí, estoy dispuesto(a)", "No me es posible en este momento"],
  },
  {
    id: 9,
    type: "radio",
    section: "Perfil Profesional",
    key: "ocupacion",
    question: "¿Actualmente se desempeña como empleado o independiente?",
    options: ["Empleado(a)", "Independiente"],
  },
  {
    id: 10,
    type: "contact",
    section: "Validación de Perfil",
    key: "contacto",
    question: "Identificación y Validación Financiera",
    description: "Por favor diligencie los siguientes datos para preparar su estudio. Garantizamos estricta confidencialidad.",
    fields: [
      { label: "SUMA DE INGRESOS MENSUALES", key: "ingresos", type: "text", placeholder: "Ej: 15.000.000", autoComplete: "off" },
      { label: "¿CUÁNTO DISPONE PARA AUMENTAR SU CUOTA A CAPITAL? (A mayor incremento, mayor ahorro. Recomendamos mínimo 30% de su cuota actual)", key: "aumento_cuota", type: "text", placeholder: "Ej: 400.000 o 600.000", autoComplete: "off" },
      { label: "NOMBRE COMPLETO", key: "nombre", type: "text", placeholder: "Ingrese su nombre y apellido completos", autoComplete: "name" },
      { label: "CORREO ELECTRÓNICO", key: "email", type: "email", placeholder: "su.correo@ejemplo.com", autoComplete: "email" },
      { label: "TELÉFONO DE WHATSAPP", key: "whatsapp", type: "tel", placeholder: "Ej: 3001234567", autoComplete: "tel" },
      { label: "CÉDULA", key: "cedula", type: "text", placeholder: "Número de identificación", autoComplete: "off" },
    ]
  },
  {
    id: 11,
    type: "radio",
    section: "Documentación Requerida",
    key: "adjuntar_extracto",
    question: "Para iniciar su análisis completamente gratis, debemos tener los detalles de su crédito; esto lo veremos en su último extracto. ¿Puede adjuntarlo ahora?",
    options: ["Sí, puedo adjuntarlo a continuación", "No lo tengo a la mano, lo enviaré luego"],
  },
  {
    id: 12,
    type: "extract",
    section: "Carga de Documento",
    key: "extracto_archivo",
    question: "Adjunte el extracto",
    description: "Por favor, cargue el PDF o imagen legible de su último extracto hipotecario. Nuestro equipo preparará su análisis.",
  }
];

export default function FormularioPremium() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [multiSelected, setMultiSelected] = useState<string[]>([]);
  const [contactData, setContactData] = useState({ 
    nombre: "", 
    cedula: "", 
    whatsapp: "", 
    email: "",
    ingresos: "",
    aumento_cuota: "",
  });
  const [fileData, setFileData] = useState<{ name: string; base64: string } | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isDisqualified, setIsDisqualified] = useState(false);
  const [disqualificationReason, setDisqualificationReason] = useState("");
  const [sourceCode, setSourceCode] = useState<string>("direct");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const ref = params.get("ref") || params.get("source");
      if (ref) setSourceCode(ref);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileData({
          name: file.name,
          base64: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    } else {
      setFileData(null);
    }
  };

  const getVisibleSteps = (currentAnswers: Record<string, string | string[]>) => {
    return steps.filter((step) => {
      const isNoCredito = currentAnswers["tiene_credito"] === "No, aún no cuento con crédito hipotecario";
      if (isNoCredito && [
        "banco", "tipo_credito", "al_dia", "desea_ahorrar", 
        "importancia_accion", "beneficios", "disposicion_aumento", 
        "adjuntar_extracto", "extracto_archivo"
      ].includes(step.key)) {
        return false;
      }
      if (step.key === "extracto_archivo" && currentAnswers["adjuntar_extracto"] === "No lo tengo a la mano, lo enviaré luego") {
        return false;
      }
      return true;
    });
  };

  const visibleSteps = getVisibleSteps(answers);
  const TOTAL = visibleSteps.length;

  const performGoNext = (latestAnswers = answers, currentIndex = currentStep) => {
    const currentVisibleSteps = getVisibleSteps(latestAnswers);
    const currentStepObj = currentVisibleSteps[currentIndex];

    // Disqualification Checks
    if (currentStepObj.key === "disposicion_aumento" && latestAnswers["disposicion_aumento"] === "No me es posible en este momento") {
      setDisqualificationReason("Agradecemos sinceramente el tiempo dedicado. Sin embargo, para estructurar los beneficios de la Ley de Vivienda de forma que logre terminar su deuda en tiempo récord y ahorrando millones en intereses, es imperativo contar con esa capacidad de aporte. Sin dicha disposición, no nos es posible ayudarle a culminar exitosamente este proceso.");
      setIsDisqualified(true);
      return;
    }

    if (currentStepObj.key === "contacto") {
      const leadPayload = {
        respuestas: { ...answers, objeciones: multiSelected, ...contactData },
        tipo: "Premium",
        fuente: getSourceName(sourceCode),
        fuente_codigo: sourceCode,
        timestamp: new Date().toISOString()
      };
      import("@/app/actions").then(({ submitLeadToN8n }) => {
        submitLeadToN8n(leadPayload);
      });
    }

    const isLastStep = currentIndex === currentVisibleSteps.length - 1;

    if (!isLastStep) {
      setDirection(1);
      setCurrentStep(currentIndex + 1);
    } else {
      if (currentStepObj.type === "extract") {
        const extractPayload = {
          whatsapp: contactData.whatsapp,
          extracto_base64: fileData?.base64,
          fuente: getSourceName(sourceCode),
          timestamp: new Date().toISOString()
        };

        import("@/app/actions").then(({ submitExtractToN8n }) => {
          submitExtractToN8n(extractPayload);
        });
      }
      setIsCompleted(true);
    }
  };

  const goNext = () => performGoNext(answers, currentStep);

  const goPrev = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep((s) => s - 1);
    }
  };

  const handleRadio = (option: string, key: string) => {
    const newAnswers = { ...answers, [key]: option };
    setAnswers(newAnswers);
    setTimeout(() => performGoNext(newAnswers, currentStep), 320);
  };

  const toggleMulti = (option: string) => {
    setMultiSelected((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  };

  // ─── Disqualification Screen ─────────────────────────────────────────────
  if (isDisqualified) {
    return (
      <div style={{ minHeight: "100vh", background: "#0d1117", display: "flex", alignItems: "center", justifyContent: "center", padding: 32, fontFamily: "var(--font-dm-sans), sans-serif" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ maxWidth: 560, width: "100%", textAlign: "center" }}
        >
          <div style={{ marginBottom: 48 }}>
            <img src="/logo-mgf-dark.png" alt="Mi Guía Financiero Logo" style={{ height: 60, margin: "0 auto" }} />
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, padding: "40px 32px", textAlign: "center", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
              <XCircle size={48} color="#D64045" />
            </div>
            <h2 style={{ color: "white", fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 800, marginBottom: 20, lineHeight: 1.3 }}>
              Proceso Detenido
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, lineHeight: 1.6 }}>
              {disqualificationReason}
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  // ─── Completion Screen ───────────────────────────────────────────────────
  if (isCompleted) {
    const nombre = contactData.nombre || "";
    return (
      <div style={{ minHeight: "100vh", background: "#0d1117", display: "flex", alignItems: "center", justifyContent: "center", padding: 32, fontFamily: "var(--font-dm-sans), sans-serif" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ maxWidth: 560, width: "100%", textAlign: "center" }}
        >
          <div style={{ marginBottom: 48 }}>
            <img src="/logo-mgf-dark.png" alt="MiGuíaFinanciero Logo" style={{ height: 60, margin: "0 auto" }} />
          </div>

          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, padding: "40px 32px", textAlign: "center", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
            <h2 style={{ color: "white", fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 900, marginBottom: 20, lineHeight: 1.2 }}>
              ¡Gracias {nombre}!
            </h2>

            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 18, marginBottom: 32, lineHeight: 1.6 }}>
              Lo más pronto posible nuestro asesor senior se comunicará con usted para <strong style={{ color: "white" }}>validar su información</strong>.
            </p>

            <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(242,183,5,0.3), transparent)", margin: "0 auto 32px", width: "80%" }} />

            {fileData ? (
              <p style={{ color: "white", fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 700, lineHeight: 1.5, marginBottom: 24 }}>
                A partir del extracto que nos ha compartido, el consultor le diseñará un conjunto de opciones que se adapten a su realidad financiera para iniciar su camino hacia pagar su casa{" "}
                <span style={{ background: "linear-gradient(120deg, #F2B705, #D9A504)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 900, fontSize: "1.1em" }}>
                  más rápido y ahorrando millones en intereses.
                </span>
              </p>
            ) : (
              <p style={{ color: "white", fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 700, lineHeight: 1.5, marginBottom: 24 }}>
                El consultor le diseñará un conjunto de opciones que se adapten a su realidad financiera. Para eso, tenga listo un <span style={{ color: "#F2B705" }}>extracto de su obligación</span> para que se lo comparta durante la llamada y así iniciar su camino hacia pagar su casa{" "}
                <span style={{ background: "linear-gradient(120deg, #F2B705, #D9A504)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 900, fontSize: "1.1em" }}>
                  más rápido y ahorrando millones en intereses.
                </span>
              </p>
            )}

            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 18, fontWeight: 800, margin: 0 }}>
              ¡Hasta entonces!
            </p>
          </div>

          <div style={{ marginTop: 40, display: "flex", justifyContent: "center", gap: 8, alignItems: "center", color: "rgba(255,255,255,0.4)", fontSize: 14 }}>
            <CheckCheck size={18} color="#25D366" />
            <span>Perfil financiero validado con éxito</span>
          </div>
        </motion.div>
      </div>
    );
  }

  const step = visibleSteps[currentStep];
  const progress = ((currentStep + 1) / TOTAL) * 100;

  const variants = {
    enter: (d: number) => ({ opacity: 0, y: d > 0 ? 40 : -40 }),
    center: { opacity: 1, y: 0 },
    exit: (d: number) => ({ opacity: 0, y: d > 0 ? -40 : 40 }),
  };

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactData.email.trim());
  const contactValid = step.key === "contacto" ? (
    contactData.nombre.trim().length > 1 && 
    contactData.whatsapp.trim().length > 7 && 
    contactData.cedula.trim().length > 5 &&
    contactData.ingresos.trim().length > 0 &&
    contactData.aumento_cuota.trim().length > 0 &&
    emailValid
  ) : true;

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
          <Image src="/logo-mgf-dark.png" alt="Mi Guía Financiero" width={260} height={84} style={{ objectFit: "contain" }} />
        </a>
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
                      <span style={{ color: "#F2B705", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>PASO {currentStep + 1} DE {TOTAL}</span>
                    </div>
                    <h2 style={{ color: "white", fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 900, lineHeight: 1.25, marginBottom: 12 }}>
                      {step.question}
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 15 }}>{step.description}</p>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 32 }}>
                    {step.fields?.map((field) => (
                      <div key={field.key}>
                        <label style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.key}
                          id={field.key}
                          autoComplete={field.autoComplete}
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
                    Siguiente paso <Send size={18} />
                  </button>
                </div>
              )}

              {/* ── EXTRACT STEP ── */}
              {step.type === "extract" && (
                <div>
                  <div style={{ marginBottom: 28 }}>
                    <div style={{ display: "inline-block", background: "rgba(242,183,5,0.12)", border: "1px solid rgba(242,183,5,0.2)", borderRadius: 8, padding: "4px 12px", marginBottom: 16 }}>
                      <span style={{ color: "#F2B705", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>PASO {currentStep + 1} DE {TOTAL}</span>
                    </div>
                    <h2 style={{ color: "white", fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 900, lineHeight: 1.25, marginBottom: 12 }}>
                      {step.question}
                    </h2>
                    <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 16, padding: 20, marginBottom: 24, border: "1px solid rgba(255,255,255,0.1)" }}>
                      <p style={{ color: "rgba(255,255,255,0.9)", fontSize: 15, lineHeight: 1.6, margin: 0 }}>
                        <span style={{ color: "#F2B705", fontWeight: 800 }}>Nota:</span> Para hacer el estudio de su caso particular necesitamos tener los datos de su obligación para lo cual le invitamos a que nos comparta el último extracto de su crédito hipotecario con <strong style={{ color: "white" }}>{answers["banco"] || "su banco"}</strong>.
                      </p>
                    </div>
                  </div>

                  <div style={{ marginBottom: 40 }}>
                    <label style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", display: "block", marginBottom: 12 }}>
                      PDF O IMAGEN DEL EXTRACTO
                    </label>
                    <div style={{ position: "relative" }}>
                      <input
                        type="file"
                        accept=".pdf,image/*"
                        onChange={handleFileChange}
                        id="extractoFile"
                        style={{ display: "none" }}
                      />
                      <label
                        htmlFor="extractoFile"
                        style={{
                          display: "flex", alignItems: "center", gap: 12,
                          padding: "24px", borderRadius: 16,
                          background: fileData ? "rgba(37,211,102,0.1)" : "rgba(255,255,255,0.03)",
                          border: fileData ? "2px solid rgba(37,211,102,0.4)" : "2px dashed rgba(255,255,255,0.15)",
                          color: fileData ? "#25D366" : "rgba(255,255,255,0.6)",
                          cursor: "pointer", fontSize: 16, transition: "all 0.2s"
                        }}
                      >
                        <span style={{ fontSize: 24 }}>{fileData ? "📄" : "📎"}</span>
                        <span style={{ flex: 1, fontWeight: 600 }}>
                          {fileData ? fileData.name : "Toque para seleccionar su documento"}
                        </span>
                      </label>
                      {fileData && (
                        <button
                          onClick={() => {
                            setFileData(null);
                            const fileInput = document.getElementById("extractoFile") as HTMLInputElement;
                            if (fileInput) fileInput.value = "";
                          }}
                          style={{
                            position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)",
                            background: "rgba(255,255,255,0.1)", border: "none", color: "white", cursor: "pointer",
                            fontSize: 12, padding: "8px 12px", borderRadius: 8
                          }}
                        >
                          Cambiar
                        </button>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={goNext}
                    disabled={!fileData}
                    style={{
                      background: fileData ? "#F2B705" : "rgba(255,255,255,0.1)",
                      color: fileData ? "#0d1117" : "rgba(255,255,255,0.3)",
                      border: "none",
                      borderRadius: 14, padding: "20px 48px", fontSize: 18, fontWeight: 900,
                      cursor: fileData ? "pointer" : "not-allowed",
                      transition: "all 0.25s ease", display: "flex", alignItems: "center", gap: 10,
                    }}
                  >
                    Finalizar análisis <Send size={20} />
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
