"use client";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  bg?: string;
  id?: string;
  padY?: string;
  innerRef?: React.RefObject<HTMLElement | null>;
}

export function Section({ children, bg, id, padY = "110px", innerRef }: SectionProps) {
  return (
    <section ref={innerRef} id={id} style={{ padding: `${padY} 28px`, background: bg || "var(--white)", position: "relative" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </section>
  );
}

export function SectionLabel({ text, color }: { text: string; color?: string }) {
  return (
    <p style={{
      color: color || "var(--yellow)", fontSize: 11, fontWeight: 800,
      textTransform: "uppercase", letterSpacing: 4, marginBottom: 14,
      textAlign: "center", fontFamily: "var(--font-dm-sans)",
    }}>{text}</p>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 style={{
      fontFamily: "var(--font-merriweather)",
      fontSize: "clamp(26px, 4.2vw, 44px)", fontWeight: 900,
      lineHeight: 1.18, textAlign: "center", color: "var(--blue)",
      marginBottom: 20,
    }}>{children}</h2>
  );
}

export function Highlight({ children }: { children: ReactNode }) {
  return (
    <span style={{
      background: `linear-gradient(180deg, transparent 58%, var(--yellow-glow) 58%)`,
      padding: "0 3px",
    }}>{children}</span>
  );
}
