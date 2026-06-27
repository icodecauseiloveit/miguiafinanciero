"use client";
import { useState, useRef, useEffect } from "react";
import { Section, SectionHeading, SectionLabel } from "../ui/Section";
import { FadeIn } from "../ui/FadeIn";
import { Slider, Button, Label } from "@heroui/react";
import { motion } from "framer-motion";
import { CTAButton } from "../ui/CTAButton";

export function SimuladorSection({ innerRef, id }: { innerRef?: React.RefObject<HTMLElement | null>, id?: string }) {
  return (
    <Section innerRef={innerRef} id={id} bg="var(--off-white)">
      <FadeIn>
        <SectionLabel text="Haz las cuentas tú mismo" />
        <SectionHeading>¿Cuánto puedes <span style={{ color: "var(--green)" }}>ahorrarte</span>?</SectionHeading>
        <div style={{ height: 12 }} />
      </FadeIn>
      <FadeIn delay={0.12}><Simulador /></FadeIn>
    </Section>
  );
}

function Simulador() {
  const [modo, setModo] = useState<"UVR" | "PESOS">("UVR");
  const [monto, setMonto] = useState(150);
  const [plazo, setPlazo] = useState(20);
  const [cuotasPagadas, setCuotasPagadas] = useState(0);
  const [mostrar, setMostrar] = useState(false);

  // UVR params
  const [spreadUVR, setSpreadUVR] = useState(6.5);
  const inflacionAnual = 5.1; // Fija para proyección

  // PESOS params
  const [tasaPesos, setTasaPesos] = useState(13.5);

  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll when results are shown
  useEffect(() => {
    if (mostrar && containerRef.current) {
      setTimeout(() => {
        containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  }, [mostrar]);

  // Asegurar que cuotasPagadas no exceda el plazo
  useEffect(() => {
    if (cuotasPagadas > plazo * 12) {
      setCuotasPagadas(plazo * 12);
    }
  }, [plazo, cuotasPagadas]);

  // ── Cálculos ──
  const montoP = monto * 1e6;
  let cuotaBase = 0, totalBase = 0, interesesBase = 0;
  let cuotaNew = 0, totalNew = 0, ahorro = 0, plazoNew = 0, aniosSaved = 0;
  let tasaLabel = "", alerta = "", alertaIcon = "";
  const k = cuotasPagadas;

  if (modo === "UVR") {
    const tasaEfectivaUVR = (spreadUVR + inflacionAnual) / 100;
    const tmUVR = tasaEfectivaUVR / 12;
    const nUVR = plazo * 12;
    const n_remUVR = Math.max(1, nUVR - k); // cuotas restantes

    cuotaBase = montoP * (tmUVR * Math.pow(1 + tmUVR, nUVR)) / (Math.pow(1 + tmUVR, nUVR) - 1);
    
    // Saldo actual proyectado (simplificado sumando inflación a la tasa)
    const saldoActual = cuotaBase * ((1 - Math.pow(1 + tmUVR, -n_remUVR)) / tmUVR);
    
    totalBase = cuotaBase * n_remUVR;
    interesesBase = totalBase - saldoActual;

    cuotaNew = cuotaBase * 1.35; // Incremento del 35%
    let nNewUVR = Math.log(cuotaNew / (cuotaNew - tmUVR * saldoActual)) / Math.log(1 + tmUVR);
    if (isNaN(nNewUVR) || nNewUVR < 0) nNewUVR = 1;
    
    plazoNew = Math.ceil(nNewUVR / 12);
    totalNew = cuotaNew * nNewUVR;
    ahorro = totalBase - totalNew;
    aniosSaved = (n_remUVR / 12) - (nNewUVR / 12);
    
    tasaLabel = `${spreadUVR}% spread + ${inflacionAnual}% inflación proj. = ${(spreadUVR + inflacionAnual).toFixed(1)}% EA`;
    alertaIcon = "📈";
    alerta = "En UVR, tu deuda está atada a la inflación, lo que hace que tu cuota y el saldo aumenten con el tiempo.";
  } else {
    const tasaEfectivaPesos = tasaPesos / 100;
    const tmPesos = tasaEfectivaPesos / 12;
    const nPesos = plazo * 12;
    const n_remPesos = Math.max(1, nPesos - k); // cuotas restantes

    cuotaBase = montoP * (tmPesos * Math.pow(1 + tmPesos, nPesos)) / (Math.pow(1 + tmPesos, nPesos) - 1);
    
    // Saldo actual real
    const saldoActual = cuotaBase * ((1 - Math.pow(1 + tmPesos, -n_remPesos)) / tmPesos);
    
    totalBase = cuotaBase * n_remPesos;
    interesesBase = totalBase - saldoActual;

    cuotaNew = cuotaBase * 1.35; // Incremento del 35%
    let nNewPesos = Math.log(cuotaNew / (cuotaNew - tmPesos * saldoActual)) / Math.log(1 + tmPesos);
    if (isNaN(nNewPesos) || nNewPesos < 0) nNewPesos = 1;

    plazoNew = Math.ceil(nNewPesos / 12);
    totalNew = cuotaNew * nNewPesos;
    ahorro = totalBase - totalNew;
    aniosSaved = (n_remPesos / 12) - (nNewPesos / 12);

    tasaLabel = `${tasaPesos}% Efectiva Anual Fija`;
    alertaIcon = "⏳";
    alerta = "En pesos, pagas casi puros intereses los primeros años. Solo una pequeña fracción de tu cuota baja la deuda real.";
  }

  // Prevención de errores si ahorro es negativo o infinito
  if (ahorro < 0 || !isFinite(ahorro)) ahorro = 0;
  if (aniosSaved < 0 || !isFinite(aniosSaved)) aniosSaved = 0;

  const fmt = (x: number) => `$${(x / 1e6).toFixed(1)}M`;
  const fmtCuota = (x: number) => `$${(x / 1e6).toFixed(2)}M`;

  const CustomSlider = ({ label, value, set, min, max, step, format }: {
    label: string, value: number, set: (v: number) => void, min: number, max: number, step?: number, format: (v: number) => string
  }) => {
    const percentage = ((value - min) / (max - min)) * 100;

    return (
      <div style={{ marginBottom: 28, padding: "0 14px" }}>
        <div className="flex justify-between items-center w-full mb-3">
          <label className="text-[var(--blue)] text-[15px] font-semibold">{label}</label>
          <span className="text-[var(--blue)] text-[16px] font-bold">
             {format(value)}
          </span>
        </div>
        
        <div className="relative w-full h-8 flex items-center">
          {/* Track background */}
          <div className="absolute w-full h-[6px] bg-gray-200 rounded-full"></div>
          
          {/* Track fill */}
          <div 
            className="absolute h-[6px] bg-[#1E3A5F] rounded-full pointer-events-none transition-all duration-75" 
            style={{ width: `${percentage}%` }}
          ></div>
          
          {/* Custom Thumb */}
          <div 
            className="absolute w-6 h-6 bg-[#e4ae00] rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.15)] pointer-events-none transform -translate-x-1/2 transition-all duration-75 border-2 border-white"
            style={{ left: `${percentage}%` }}
          ></div>

          {/* Invisible Native Range Input for interactions */}
          <input 
            type="range" 
            min={min} max={max} step={step || 1} 
            value={value}
            onChange={(e) => {
               set(Number(e.target.value));
               setMostrar(false);
            }}
            className="absolute w-full h-full opacity-0 cursor-pointer z-10"
          />
        </div>
      </div>
    );
  };

  // Lógica para la gráfica de barras
  const maxTotal = totalBase;
  const pctBase = 100;
  const pctNew = Math.max(10, (totalNew / maxTotal) * 100);

  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <div 
        className="w-full"
        style={{
          padding: "clamp(12px, 2.5vw, 24px)",
          background: "var(--white)", borderRadius: 32,
          border: `1px solid var(--gray-border)`, maxWidth: 740,
          boxShadow: `0 24px 50px rgba(30,58,95,0.06)`,
        }}
      >
          <div className="flex flex-col sm:flex-row gap-2.5 mb-8">
            {([
              { key: "UVR" as const, label: "Crédito en UVR", icon: "📈", desc: "Cuota variable con inflación" },
              { key: "PESOS" as const, label: "Crédito en Pesos", icon: "💵", desc: "Cuota fija, tasa fija" },
            ]).map(opt => (
              <button key={opt.key} onClick={() => { setModo(opt.key); setMostrar(false); }} style={{
                flex: 1, padding: "16px 14px", borderRadius: 18, cursor: "pointer",
                border: `2px solid ${modo === opt.key ? "var(--blue)" : "transparent"}`,
                background: modo === opt.key ? "var(--blue-light)" : "var(--off-white)",
                transition: "all 0.2s ease", textAlign: "center",
              }}>
                <span style={{ fontSize: 24, display: "block", marginBottom: 6 }}>{opt.icon}</span>
                <span style={{ display: "block", color: "var(--blue)", fontSize: 15, fontWeight: 700 }}>{opt.label}</span>
                <span style={{ display: "block", color: "var(--gray-light)", fontSize: 12, marginTop: 4 }}>{opt.desc}</span>
              </button>
            ))}
          </div>

          <CustomSlider label="Monto inicial del crédito" value={monto} set={setMonto} min={50} max={600} format={(v) => `$${v} millones`} />
          
          {modo === "UVR" ? (
            <CustomSlider label="Spread UVR (tasa del banco)" value={spreadUVR} set={setSpreadUVR} min={3} max={14} step={0.1} format={(v) => `${v}%`} />
          ) : (
            <CustomSlider label="Tasa fija en pesos" value={tasaPesos} set={setTasaPesos} min={9} max={22} step={0.1} format={(v) => `${v}% EA`} />
          )}

          <CustomSlider label="Plazo original del crédito" value={plazo} set={setPlazo} min={5} max={30} format={(v) => `${v} años`} />
          <CustomSlider label="Cuotas que ya has pagado" value={cuotasPagadas} set={setCuotasPagadas} min={0} max={plazo * 12} format={(v) => `${v} meses`} />

          <div style={{
            padding: "14px 18px", borderRadius: 14, marginBottom: 28,
            background: modo === "UVR" ? "var(--red-soft)" : "var(--blue-light)",
            border: `1px solid ${modo === "UVR" ? "rgba(214,64,69,0.15)" : "rgba(30,58,95,0.08)"}`,
          }}>
            <p style={{ color: modo === "UVR" ? "var(--red)" : "var(--blue-mid)", fontSize: 13, margin: 0, fontWeight: 600 }}>
              {alertaIcon} {tasaLabel}
            </p>
            <p style={{ color: "var(--gray)", fontSize: 12, margin: "6px 0 0", lineHeight: 1.5 }}>
              {alerta}
            </p>
          </div>

          <Button 
            onPress={() => setMostrar(true)}
            className="w-full h-16 text-lg font-black tracking-wider bg-[#1E3A5F] text-white rounded-2xl transition-all hover:bg-[#112166] active:scale-95 shadow-xl"
          >
            VER PROYECCIÓN DE AHORRO
          </Button>

          {/* RESULTADOS */}
          {mostrar && (
            <div ref={containerRef} style={{ marginTop: 40, animation: "fadeUp 0.6s ease" }}>
              <h3 style={{ fontSize: 22, color: "var(--blue)", fontWeight: 900, marginBottom: 24, textAlign: "center", fontFamily: "var(--font-merriweather)" }}>
                Comparativa de tu crédito
              </h3>

              <div className="flex flex-col md:flex-row gap-6 mb-8">
                {/* Gráfica */}
                <div className="flex-1 flex items-end justify-around bg-gray-50 rounded-2xl border border-gray-100 h-64 overflow-hidden relative" style={{ padding: 12 }}>
                  {/* Barra Base */}
                  <div className="flex flex-col items-center justify-end h-full w-full max-w-[100px] z-10">
                    <span className="text-[10px] sm:text-xs text-gray-500 font-bold mb-2 text-center leading-tight">Sin<br/>Abonos</span>
                    <motion.div 
                      initial={{ height: 0 }} animate={{ height: `${pctBase}%` }} transition={{ duration: 1, ease: "easeOut" }}
                      className="w-full bg-red-400 rounded-t-xl relative flex flex-col justify-end pb-3"
                      style={{ minHeight: '20%' }}
                    >
                      <span className="text-white text-xs sm:text-sm font-black text-center absolute -top-6 w-full text-red-500">{fmt(totalBase)}</span>
                    </motion.div>
                    <span className="text-xs text-red-500 font-bold mt-3">{plazo} años</span>
                  </div>
                  
                  {/* Barra Optimizada */}
                  <div className="flex flex-col items-center justify-end h-full w-full max-w-[100px] z-10">
                    <span className="text-[10px] sm:text-xs text-gray-500 font-bold mb-2 text-center leading-tight">Con<br/>Optimización</span>
                    <motion.div 
                      initial={{ height: 0 }} animate={{ height: `${pctNew}%` }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                      className="w-full bg-green-500 rounded-t-xl relative flex flex-col justify-end pb-3 shadow-[0_0_15px_rgba(37,211,102,0.4)]"
                      style={{ minHeight: '10%' }}
                    >
                      <span className="text-white text-xs sm:text-sm font-black text-center absolute -top-6 w-full text-green-600">{fmt(totalNew)}</span>
                    </motion.div>
                    <span className="text-xs text-green-600 font-bold mt-3">~{plazoNew} años</span>
                  </div>
                  
                  {/* Grid lines background */}
                  <div className="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none" style={{ padding: "12px 12px 24px" }}>
                    <div className="w-full border-t border-gray-500"></div>
                    <div className="w-full border-t border-gray-500"></div>
                    <div className="w-full border-t border-gray-500"></div>
                    <div className="w-full border-t border-gray-500"></div>
                  </div>
                </div>

                {/* Datos numéricos */}
                <div className="flex-1 flex flex-col gap-4 justify-center">
                  <div className="rounded-xl bg-red-50 border border-red-100" style={{ padding: "10px 12px" }}>
                    <p className="text-xs text-red-600 font-bold uppercase tracking-wider mb-1">Total a pagar al banco</p>
                    <p className="text-2xl text-red-500 font-black mb-1">{fmt(totalBase)}</p>
                    <p className="text-xs text-gray-600">Cuota actual est: <strong className="text-gray-800">{fmtCuota(cuotaBase)}</strong></p>
                  </div>
                  <div className="rounded-xl bg-green-50 border border-green-200 shadow-sm relative overflow-hidden" style={{ padding: "10px 12px" }}>
                    <div className="absolute top-0 right-0 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">¡ÓPTIMO!</div>
                    <p className="text-xs text-green-700 font-bold uppercase tracking-wider mb-1">Nuevo total a pagar</p>
                    <p className="text-2xl text-green-600 font-black mb-1">{fmt(totalNew)}</p>
                    <p className="text-xs text-gray-600">Nueva cuota est: <strong className="text-gray-800">{fmtCuota(cuotaNew)}</strong></p>
                  </div>
                </div>
              </div>

              {/* Caja de ahorro */}
              <div className="rounded-3xl bg-gradient-to-br from-[var(--cream)] to-[var(--cream-deep)] border-2 border-[#e4ae00] text-center transform transition-all hover:scale-[1.02]" style={{ padding: "clamp(12px, 2vw, 20px)", boxShadow: "0 10px 40px rgba(37, 211, 102, 0.2), 0 0 0 1px rgba(242, 183, 5, 0.3)" }}>
                <p className="text-blue-900 text-xs sm:text-sm font-bold uppercase tracking-widest mb-2">Tu ahorro proyectado sería de</p>
                <motion.p 
                  initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", delay: 0.4 }}
                  className="text-4xl sm:text-5xl lg:text-6xl text-blue-900 font-black mb-2 leading-none" style={{ fontFamily: "var(--font-merriweather)", textShadow: "0 2px 10px rgba(37,211,102,0.3)" }}
                >
                  <span className="text-gradient">{fmt(ahorro)}</span>
                </motion.p>
                <p className="text-blue-800 text-base sm:text-xl font-medium mt-4">
                  Terminarías de pagar <strong className="font-black text-yellow-700 bg-yellow-100 px-3 py-1 rounded-md">{aniosSaved.toFixed(1)} años antes</strong>.
                </p>
              </div>

              {/* Disclaimer */}
              <p style={{ color: "var(--gray)", fontSize: 11, textAlign: "justify", marginTop: 24, lineHeight: 1.6, padding: "0 10px" }}>
                * <strong>Disclaimer legal:</strong> Esta es una simulación proyectada únicamente para darte una idea aproximada del ahorro potencial. Los cálculos asumen un incremento de tu cuota mensual en un <strong>35%</strong>, destinado 100% a capital de forma recurrente. Los valores finales pueden y van a variar dependiendo de la fecha de desembolso, liquidación exacta de tu entidad financiera, cobro de seguros obligatorios, y el comportamiento real y futuro de la inflación (para créditos en UVR). Para un cálculo exacto, solicita un análisis profesional basado en tus extractos bancarios recientes.
              </p>
              <CTAButton style={{ marginTop: 32 }} />
            </div>
          )}
        </div>
      </div>
    );
}
