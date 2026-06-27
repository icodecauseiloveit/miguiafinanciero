import Link from "next/link";
import { FadeIn } from "./FadeIn";

export function CTAButton({ text = "SOLICITAR ANÁLISIS GRATUITO →", className = "", style = {} }: { text?: string, className?: string, style?: React.CSSProperties }) {
  return (
    <FadeIn delay={0.2}>
      <div style={{ textAlign: "center", marginTop: 48, ...style }} className={className}>
        <Link
          href="/formulario"
          style={{
            display: "inline-block", padding: "16px 40px", borderRadius: 16,
            background: "var(--blue)", color: "var(--white)", fontSize: 15, fontWeight: 800,
            textDecoration: "none", boxShadow: "0 8px 24px rgba(30,58,95,0.25)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 30px rgba(30,58,95,0.3)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(30,58,95,0.25)"; }}
        >
          {text}
        </Link>
      </div>
    </FadeIn>
  );
}
