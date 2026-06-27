import Link from "next/link";
import { FadeIn } from "./FadeIn";

export function CTAButton({ text = "SOLICITAR ANÁLISIS GRATUITO", className = "", style = {} }: { text?: string, className?: string, style?: React.CSSProperties }) {
  return (
    <FadeIn delay={0.2}>
      <div style={{ textAlign: "center", marginTop: 48, ...style }} className={className}>
        <Link
          href="/formulario"
          style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "18px 44px", borderRadius: 16,
            background: "linear-gradient(90deg, var(--blue) 0%, var(--blue-mid) 50%, var(--blue) 100%)",
            backgroundSize: "200% auto",
            color: "var(--white)", fontSize: 16, fontWeight: 800,
            textDecoration: "none", boxShadow: "0 10px 30px rgba(30,58,95,0.3)",
            transition: "all 0.3s ease",
            animation: "shimmer 4s infinite linear"
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px) scale(1.02)"; e.currentTarget.style.boxShadow = "0 15px 35px rgba(30,58,95,0.4)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(30,58,95,0.3)"; }}
        >
          {text}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
        <p style={{ color: "var(--gray-light)", fontSize: 12, marginTop: 12, fontWeight: 500 }}>Sin compromisos. Tus datos están 100% seguros.</p>
      </div>
    </FadeIn>
  );
}
