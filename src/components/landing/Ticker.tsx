"use client";

export function Ticker() {
  const messages = [
    "\"Pago y pago, pero cada vez debo más\"",
    "\"La cuota se triplicó en pocos años\"",
    "\"No sabía que la ley me daba esos derechos\"",
    "\"El banco me dijo que no se podía\"",
    "\"Mi papá perdió su casa con el UPAC\"",
    "\"Mucho esfuerzo, cero avance\"",
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
