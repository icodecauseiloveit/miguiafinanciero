"use client";
import { useState, useEffect, useRef } from "react";
import { Section, SectionHeading, SectionLabel } from "../ui/Section";
import { FadeIn } from "../ui/FadeIn";
import { Slider, Button } from "@heroui/react";
import { motion } from "framer-motion";

export function SimuladorSection({ innerRef }: { innerRef?: React.RefObject<HTMLElement | null> }) {
  return (
    <Section innerRef={innerRef} bg="var(--off-white)">
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
  const [monto, setMonto] = useState(170);
  const [plazo, setPlazo] = useState(30);
  const [mostrar, setMostrar] = useState(false);

  // UVR params
  const [spreadUVR, setSpreadUVR] = useState(5.52);
  const inflacionAnual = 5.1;

  // PESOS params
  const [tasaPesos, setTasaPesos] = useState(12.5);

  // ── Cálculos UVR ──
  const tasaEfectivaUVR = (spreadUVR + inflacionAnual) / 100;
  const tmUVR = tasaEfectivaUVR / 12;
  const nUVR = plazo * 12;
  const montoP = monto * 1e6;

  const cuotaUVR = montoP * (tmUVR * Math.pow(1 + tmUVR, nUVR)) / (Math.pow(1 + tmUVR, nUVR) - 1);
  const totalUVR = cuotaUVR * nUVR;
  const interesesUVR = totalUVR - montoP;

  const cuota150UVR = cuotaUVR * 1.5;
  const nNewUVR = Math.log(cuota150UVR / (cuota150UVR - tmUVR * montoP)) / Math.log(1 + tmUVR);
  const plazoNewUVR = Math.ceil(nNewUVR / 12);
  const totalNewUVR = cuota150UVR * nNewUVR;
  const ahorroUVR = totalUVR - totalNewUVR;
  const aniosSavedUVR = plazo - plazoNewUVR;

  const saldoAño1SinAbono = montoP * (1 + inflacionAnual / 100);
  let capitalPagadoAño1UVR = 0;
  let saldoTemp = montoP;
  for (let i = 0; i < 12; i++) {
    const intMes = saldoTemp * tmUVR;
    const capMes = cuotaUVR - intMes;
    capitalPagadoAño1UVR += capMes;
    saldoTemp -= capMes;
  }

  // ── Cálculos PESOS ──
  const tasaEfectivaPesos = tasaPesos / 100;
  const tmPesos = tasaEfectivaPesos / 12;
  const nPesos = plazo * 12;

  const cuotaPesos = montoP * (tmPesos * Math.pow(1 + tmPesos, nPesos)) / (Math.pow(1 + tmPesos, nPesos) - 1);
  const totalPesos = cuotaPesos * nPesos;
  const interesesPesos = totalPesos - montoP;

  let capitalPagadoAño1Pesos = 0;
  let saldoTempP = montoP;
  for (let i = 0; i < 12; i++) {
    const intMes = saldoTempP * tmPesos;
    const capMes = cuotaPesos - intMes;
    capitalPagadoAño1Pesos += capMes;
    saldoTempP -= capMes;
  }
  const pctInteresesAño1 = ((cuotaPesos * 12 - capitalPagadoAño1Pesos) / (cuotaPesos * 12)) * 100;

  const cuota150Pesos = cuotaPesos * 1.5;
  const nNewPesos = Math.log(cuota150Pesos / (cuota150Pesos - tmPesos * montoP)) / Math.log(1 + tmPesos);
  const plazoNewPesos = Math.ceil(nNewPesos / 12);
  const totalNewPesos = cuota150Pesos * nNewPesos;
  const ahorroPesos = totalPesos - totalNewPesos;
  const aniosSavedPesos = plazo - plazoNewPesos;

  // ── Seleccionar resultados según modo ──
  const R = modo === "UVR" ? {
    cuota: cuotaUVR, total: totalUVR, intereses: interesesUVR,
    cuotaNew: cuota150UVR, totalNew: totalNewUVR, ahorro: ahorroUVR,
    plazoNew: plazoNewUVR, aniosSaved: aniosSavedUVR,
    tasaLabel: `${spreadUVR}% spread + ${inflacionAnual}% inflación = ${(spreadUVR + inflacionAnual).toFixed(1)}% efectiva`,
    alerta: `En tu primer año, tu saldo en pesos pasaría de $${monto}M a ~$${(saldoAño1SinAbono / 1e6).toFixed(0)}M por la inflación, aunque hayas pagado ${(capitalPagadoAño1UVR / 1e6).toFixed(1)}M a capital.`,
    alertaIcon: "📈",
  } : {
    cuota: cuotaPesos, total: totalPesos, intereses: interesesPesos,
    cuotaNew: cuota150Pesos, totalNew: totalNewPesos, ahorro: ahorroPesos,
    plazoNew: plazoNewPesos, aniosSaved: aniosSavedPesos,
    tasaLabel: `${tasaPesos}% EA fija`,
    alerta: `En tu primer año, el ${pctInteresesAño1.toFixed(0)}% de lo que pagas va a intereses. Solo $${(capitalPagadoAño1Pesos / 1e6).toFixed(1)}M de tus $${(cuotaPesos * 12 / 1e6).toFixed(1)}M en cuotas reducen tu deuda.`,
    alertaIcon: "⏳",
  };

  const fmt = (x: number) => `$${(x / 1e6).toFixed(1)}M`;
  const fmtCuota = (x: number) => `$${(x / 1e6).toFixed(2)}M`;

  const CustomSlider = ({ label, value, set, min, max, step, format }: {
    label: string, value: number, set: (v: number) => void, min: number, max: number, step?: number, format: (v: number) => string
  }) => {
    return (
      <div style={{ marginBottom: 30 }}>
        <Slider
          minValue={min}
          maxValue={max}
          step={step || 1}
          value={value}
          onChange={(v: number | number[]) => { 
            const val = Array.isArray(v) ? v[0] : v;
            set(val); 
            setMostrar(false); 
          }}
          className="max-w-full"
        >
          <div className="flex justify-between items-center mb-2">
            <span style={{ color: "var(--blue)", fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              {label}
            </span>
            <Slider.Output style={{ color: "var(--blue)", fontWeight: 900, fontSize: 20, fontFamily: "var(--font-merriweather)" }}>
              {format(value)}
            </Slider.Output>
          </div>
          <Slider.Track className="bg-gray-100 h-2.5 rounded-full relative cursor-pointer">
            <Slider.Fill className="bg-[#1E3A5F] h-full absolute rounded-full" />
            <Slider.Thumb className="w-8 h-8 bg-white border-[3px] border-[#1E3A5F] rounded-full shadow-xl z-20 -ml-4 flex items-center justify-center focus:outline-none hover:scale-110 transition-transform cursor-grab active:cursor-grabbing">
              <motion.div
                animate={{ 
                  scale: [0.7, 0.9, 0.7],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: 'var(--blue)',
                }}
              />
            </Slider.Thumb>
          </Slider.Track>
        </Slider>
      </div>
    );
  };

  return (
    <div style={{
      background: "var(--white)", borderRadius: 28, padding: "44px 40px",
      border: `1px solid var(--gray-border)`, maxWidth: 640, margin: "0 auto",
      boxShadow: `0 20px 60px rgba(30,58,95,0.07), 0 1px 3px rgba(30,58,95,0.04)`,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
        <div style={{
          width: 48, height: 48, borderRadius: 14, background: `linear-gradient(135deg, var(--yellow), var(--yellow-muted))`,
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
          boxShadow: `0 4px 12px var(--yellow-soft)`,
        }}>📊</div>
        <div>
          <h3 style={{ color: "var(--blue)", fontSize: 19, margin: 0, fontFamily: "var(--font-merriweather)", fontWeight: 800 }}>Simulador de Ahorro</h3>
          <p style={{ color: "var(--gray-light)", fontSize: 12, margin: 0, letterSpacing: 0.3 }}>Selecciona tu tipo de crédito</p>
        </div>
      </div>

      {/* ── Selector UVR / PESOS ── */}
      <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
        {([
          { key: "UVR" as const, label: "Crédito en UVR", icon: "📈", desc: "Cuota variable con inflación" },
          { key: "PESOS" as const, label: "Crédito en Pesos", icon: "💵", desc: "Cuota fija, tasa fija" },
        ]).map(opt => (
          <button key={opt.key} onClick={() => { setModo(opt.key); setMostrar(false); }} style={{
            flex: 1, padding: "16px 14px", borderRadius: 16, cursor: "pointer",
            border: `2px solid ${modo === opt.key ? "var(--blue)" : "var(--gray-border)"}`,
            background: modo === opt.key ? "var(--blue-light)" : "var(--white)",
            transition: "all 0.25s ease", textAlign: "center",
          }}>
            <span style={{ fontSize: 24, display: "block", marginBottom: 6 }}>{opt.icon}</span>
            <span style={{ display: "block", color: "var(--blue)", fontSize: 14, fontWeight: 700 }}>{opt.label}</span>
            <span style={{ display: "block", color: "var(--gray-light)", fontSize: 11, marginTop: 2 }}>{opt.desc}</span>
          </button>
        ))}
      </div>

      {/* ── Sliders ── */}
      <CustomSlider label="Monto del crédito" value={monto} set={setMonto} min={50} max={500} format={(v: number) => `$${v} millones`} />

      {modo === "UVR" ? (
        <CustomSlider label="Spread UVR (tasa del banco)" value={spreadUVR} set={setSpreadUVR} min={3} max={12} step={0.1} format={(v: number) => `${v}% EA`} />
      ) : (
        <CustomSlider label="Tasa fija en pesos" value={tasaPesos} set={setTasaPesos} min={8} max={20} step={0.1} format={(v: number) => `${v}% EA`} />
      )}

      <CustomSlider label="Plazo del crédito" value={plazo} set={setPlazo} min={5} max={30} format={(v: number) => `${v} años`} />

      {/* ── Info tasa efectiva ── */}
      <div style={{
        padding: "12px 16px", borderRadius: 12, marginBottom: 20,
        background: modo === "UVR" ? "rgba(214,64,69,0.04)" : "var(--blue-light)",
        border: `1px solid ${modo === "UVR" ? "rgba(214,64,69,0.1)" : "rgba(30,58,95,0.08)"}`,
      }}>
        <p style={{ color: modo === "UVR" ? "var(--red)" : "var(--blue-mid)", fontSize: 12, margin: 0, fontWeight: 600 }}>
          {modo === "UVR" ? "⚠️" : "ℹ️"} Tasa efectiva: {R.tasaLabel}
        </p>
        {modo === "UVR" && (
          <p style={{ color: "var(--gray)", fontSize: 11, margin: "4px 0 0", lineHeight: 1.5 }}>
            En UVR, tu deuda se indexa a la inflación. La cuota en pesos sube cada año.
          </p>
        )}
      </div>

      <Button 
        onPress={() => setMostrar(true)}
        className="w-full h-16 text-lg font-black tracking-widest bg-gradient-to-r from-[var(--green)] to-[var(--green-dark)] shadow-xl text-white rounded-2xl transition-all hover:scale-[1.02] active:scale-95"
      >
        CALCULAR MI AHORRO EN PESOS →
      </Button>

      {mostrar && (
        <div style={{ marginTop: 32, animation: "fadeUp 0.5s ease" }}>

          {/* Alerta específica del tipo de crédito */}
          <div style={{
            padding: "14px 18px", borderRadius: 14, marginBottom: 20,
            background: modo === "UVR" ? "var(--red-soft)" : "var(--yellow-soft)",
            border: `1px solid ${modo === "UVR" ? "rgba(214,64,69,0.12)" : "rgba(242,183,5,0.2)"}`,
          }}>
            <p style={{ color: modo === "UVR" ? "var(--red)" : "var(--blue-mid)", fontSize: 12, margin: 0, lineHeight: 1.6, fontWeight: 500 }}>
              {R.alertaIcon} {R.alerta}
            </p>
          </div>

          {/* Cuota actual */}
          <div style={{
            padding: "14px 18px", borderRadius: 14, marginBottom: 20,
            background: "var(--blue-light)", border: `1px solid rgba(30,58,95,0.06)`,
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <span style={{ color: "var(--blue-mid)", fontSize: 13, fontWeight: 600 }}>Tu cuota mensual actual estimada</span>
            <span style={{ color: "var(--blue)", fontSize: 18, fontWeight: 900, fontFamily: "var(--font-merriweather)" }}>{fmtCuota(R.cuota)}</span>
          </div>

          {/* Comparativa */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { label: "Sin reestructurar", val: fmt(R.total), sub: `en ${plazo} años`, sub2: `Intereses: ${fmt(R.intereses)}`, color: "var(--red)", bg: "var(--red-soft)", border: "rgba(214,64,69,0.12)" },
              { label: "Con reestructuración", val: fmt(R.totalNew), sub: `en ~${R.plazoNew} años`, sub2: `Cuota nueva: ${fmtCuota(R.cuotaNew)}/mes`, color: "var(--green-dark)", bg: "var(--green-soft)", border: "rgba(37,211,102,0.15)" },
            ].map((c, i) => (
              <div key={i} style={{
                background: c.bg, borderRadius: 18, padding: 22, textAlign: "center",
                border: `1.5px solid ${c.border}`,
              }}>
                <p style={{ color: c.color, fontSize: 10, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: 2.5, fontWeight: 800 }}>{c.label}</p>
                <p style={{ color: c.color, fontSize: 30, fontWeight: 900, margin: "0 0 4px", fontFamily: "var(--font-merriweather)" }}>{c.val}</p>
                <p style={{ color: "var(--gray)", fontSize: 12, margin: "0 0 4px" }}>{c.sub}</p>
                <p style={{ color: "var(--gray-light)", fontSize: 11, margin: 0 }}>{c.sub2}</p>
              </div>
            ))}
          </div>

          {/* Ahorro total */}
          <div style={{
            marginTop: 20, borderRadius: 20, padding: 28, textAlign: "center",
            background: `linear-gradient(135deg, var(--cream), var(--cream-deep))`,
            border: `2px solid var(--yellow)`,
            boxShadow: `inset 0 1px 0 rgba(255,255,255,0.6)`,
          }}>
            <p style={{ color: "var(--blue-mid)", fontSize: 10, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: 3, fontWeight: 800 }}>Tu ahorro estimado</p>
            <p style={{ color: "var(--blue)", fontSize: 48, fontWeight: 900, margin: "0 0 8px", fontFamily: "var(--font-merriweather)", lineHeight: 1 }}>{fmt(Math.max(R.ahorro, 0))}</p>
            <p style={{ color: "var(--blue-mid)", fontSize: 16, margin: 0, fontWeight: 500 }}>
              y <strong style={{ color: "var(--yellow-muted)", fontWeight: 900 }}>{Math.max(R.aniosSaved, 0)} años menos</strong> pagándole al banco
            </p>
          </div>

          {/* Disclaimer */}
          <p style={{ color: "var(--gray-light)", fontSize: 10, textAlign: "center", marginTop: 16, lineHeight: 1.6 }}>
            {modo === "UVR"
              ? `*Estimación con aumento del 50% de cuota destinado a capital. Tasa efectiva: ${spreadUVR}% spread + ${inflacionAnual}% inflación proyectada. En UVR la cuota y el saldo varían con la inflación real. Análisis personalizado gratuito para tu caso específico.`
              : `*Estimación con aumento del 50% de cuota destinado a capital. Tasa fija: ${tasaPesos}% EA. En pesos la cuota es fija pero los intereses representan la mayor parte del pago en los primeros años. Análisis personalizado gratuito para tu caso.`
            }
          </p>
        </div>
      )}
    </div>
  );
}
