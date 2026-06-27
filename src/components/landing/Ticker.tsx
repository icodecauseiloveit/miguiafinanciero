"use client";

export function Ticker() {
  const messages = [
    "\"Logré reducir el plazo de mi crédito varios años\"",
    "\"Ahora pago más a capital y menos a intereses\"",
    "\"No sabía que la Ley 546 me daba estos derechos\"",
    "\"Mantengo mis beneficios y optimizo mi futuro financiero\"",
    "\"Pude optimizar mi crédito sin cambiar de banco\"",
    "\"Una decisión inteligente respaldada por la ley\"",
  ];

  return (
    <div style={{
      overflow: "hidden", padding: "16px 0",
      background: `linear-gradient(90deg, var(--cream), rgba(214,64,69,0.04), var(--cream))`,
      borderTop: `1px solid rgba(30,58,95,0.04)`, borderBottom: `1px solid rgba(30,58,95,0.04)`,
    }}>
      <div style={{ display: "flex", animation: "ticker 35s linear infinite", whiteSpace: "nowrap" }}>
        {[...Array(2)].map((_, rep) => (
          <div key={rep} style={{ display: "flex", gap: 52, paddingRight: 52 }}>
            {messages.map((t, i) => (
              <span key={i} style={{ color: "rgba(214,64,69,0.35)", fontSize: 13, fontStyle: "italic", fontWeight: 500 }}>{t}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
