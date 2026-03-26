"use client";
import { useState, useEffect } from "react";

export function Navbar({ onContactClick }: { onContactClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? "10px 28px" : "16px 28px",
      background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(251,247,238,0.6)",
      backdropFilter: "blur(24px) saturate(1.4)",
      borderBottom: `1px solid ${scrolled ? "var(--gray-border)" : "transparent"}`,
      display: "flex", justifyContent: "space-between", alignItems: "center",
      transition: "all 0.4s cubic-bezier(.22,1,.36,1)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img 
          src="/logo-mgf.png" 
          alt="Mi Guía Financiero" 
          style={{ height: 60, width: "auto" }} 
        />
      </div>
      <a href="/formulario" style={{
        display: "inline-block", padding: "10px 24px", borderRadius: 12, border: "none", cursor: "pointer",
        background: "#112166", color: "var(--white)", fontSize: 13, fontWeight: 700, textDecoration: "none",
        boxShadow: "0 3px 12px rgba(17, 33, 102, 0.2)",
        transition: "all 0.25s ease",
      }}
      >Análisis Gratis</a>
    </nav>
  );
}
